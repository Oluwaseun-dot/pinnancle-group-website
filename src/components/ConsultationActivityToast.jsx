import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, X } from 'lucide-react';
import { getActiveHourlyBooking, BOOKING_CALENDAR_URL } from '../config/bookingConfig';

export default function ConsultationActivityToast() {
  const [booking, setBooking] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    let hideTimer = null;
    let initialCheckTimer = null;

    const checkActivity = async () => {
      if (isDismissed) return;

      const activeBooking = await getActiveHourlyBooking();
      if (!activeBooking) {
        setIsVisible(false);
        return;
      }

      // Check session storage to ensure we show maximum ONCE per hour per booking
      const hourSlotKey = `pinnancle_booking_seen_${activeBooking.bookingId}_${new Date().getHours()}`;
      const alreadySeen = sessionStorage.getItem(hourSlotKey);

      if (!alreadySeen) {
        setBooking(activeBooking);
        setIsVisible(true);
        sessionStorage.setItem(hourSlotKey, 'true');

        // Automatically hide after 7 seconds
        hideTimer = setTimeout(() => {
          setIsVisible(false);
        }, 7000);
      }
    };

    // Stagger initial check so it doesn't pop up the split-second the page loads
    initialCheckTimer = setTimeout(() => {
      checkActivity();
    }, 3500);

    return () => {
      if (initialCheckTimer) clearTimeout(initialCheckTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [isDismissed]);

  if (!booking || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm w-[calc(100vw-3rem)] sm:w-auto animate-slideUp">
      <div className="p-4 rounded-2xl bg-brand-charcoal/95 backdrop-blur-md border border-brand-border/80 shadow-2xl relative flex items-start gap-3.5 group hover:border-brand-lime/40 transition-colors">
        {/* Pulsing indicator icon */}
        <div className="w-9 h-9 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center shrink-0 text-brand-lime mt-0.5">
          <Calendar className="w-4 h-4" />
        </div>

        {/* Content text */}
        <div className="flex-1 pr-6 space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver">
              Recent Consultation
            </span>
          </div>

          <p className="text-xs sm:text-sm text-white font-medium leading-snug">
            <strong className="text-brand-lime font-semibold">{booking.firstName}</strong> just booked an{' '}
            <span className="text-brand-offWhite">{booking.appointmentType}</span>
          </p>

          <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-brand-silver">
            <Link
              to={BOOKING_CALENDAR_URL}
              className="text-brand-silver hover:text-brand-lime transition-colors underline-offset-2 hover:underline"
            >
              Book your time slot →
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => {
            setIsVisible(false);
            setIsDismissed(true);
          }}
          className="absolute top-3 right-3 p-1 rounded-lg text-brand-silver/60 hover:text-white hover:bg-brand-dark transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
