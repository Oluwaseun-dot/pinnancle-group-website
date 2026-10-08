/**
 * Pinnancle Group - Booking & Consultation Configuration
 *
 * Configurable connection for GoHighLevel CRM, booking calendar URLs,
 * and consultation activity notifications.
 */

// Production GoHighLevel or internal calendar URL
export const BOOKING_CALENDAR_URL = '/book';

// Optional direct GoHighLevel widget / iframe embed URL if desired
export const CALENDAR_EMBED_URL = '';

// Calendar timezone (used for calculating active hourly slots)
export const BOOKING_TIMEZONE = 'Europe/London';

/**
 * DEMO MODE TOGGLE:
 * Set to TRUE during development/testing to preview sample hourly bookings.
 * Set to FALSE in production to strictly use verified live GoHighLevel bookings only.
 * When FALSE and no live booking exists for the current hour, NOTHING will be shown.
 */
export const DEMO_MODE = true;

/**
 * Sample bookings mapped by calendar date (YYYY-MM-DD) and 24-hour slot (0-23).
 * Used exclusively when DEMO_MODE === true.
 * Notice: Each date has unique, non-recycled booking records.
 */
export const SAMPLE_BOOKINGS_BY_DATE = {
  // October 8th schedule
  '2026-10-08': [
    { bookingId: 'GHL-1008-09', firstName: 'Marcus', appointmentType: 'Automation Consultation', hour: 9, status: 'confirmed' },
    { bookingId: 'GHL-1008-11', firstName: 'Elena', appointmentType: 'CRM Architecture Consultation', hour: 11, status: 'confirmed' },
    { bookingId: 'GHL-1008-13', firstName: 'Reina', appointmentType: 'Automation Consultation', hour: 13, status: 'confirmed' },
    { bookingId: 'GHL-1008-14', firstName: 'David', appointmentType: 'CRM Consultation', hour: 14, status: 'confirmed' },
    { bookingId: 'GHL-1008-16', firstName: 'Tariq', appointmentType: 'AI Lead Follow-Up Consultation', hour: 16, status: 'confirmed' },
    { bookingId: 'GHL-1008-19', firstName: 'Sophie', appointmentType: 'Shopify Automation Consultation', hour: 19, status: 'confirmed' }
  ],
  // October 9th schedule
  '2026-10-09': [
    { bookingId: 'GHL-1009-10', firstName: 'Kemi', appointmentType: 'Ecommerce Operations Consultation', hour: 10, status: 'confirmed' },
    { bookingId: 'GHL-1009-12', firstName: 'Alexander', appointmentType: 'AI Voice Agent Consultation', hour: 12, status: 'confirmed' },
    { bookingId: 'GHL-1009-15', firstName: 'Chloe', appointmentType: 'Website & Lead Triage Consultation', hour: 15, status: 'confirmed' },
    { bookingId: 'GHL-1009-17', firstName: 'Daniel', appointmentType: 'Custom Automation Consultation', hour: 17, status: 'confirmed' }
  ],
  // October 10th schedule
  '2026-10-10': [
    { bookingId: 'GHL-1010-11', firstName: 'Amara', appointmentType: 'Healthcare Scheduling Consultation', hour: 11, status: 'confirmed' },
    { bookingId: 'GHL-1010-14', firstName: 'Liam', appointmentType: 'Real Estate Inbound Consultation', hour: 14, status: 'confirmed' },
    { bookingId: 'GHL-1010-16', firstName: 'Zainab', appointmentType: 'CRM Pipeline Consultation', hour: 16, status: 'confirmed' }
  ]
};

/**
 * Fetch qualifying booking for the current date and hourly slot.
 *
 * In LIVE MODE (DEMO_MODE === false): Queries real confirmed GoHighLevel bookings.
 * In DEMO MODE (DEMO_MODE === true): Uses the sample schedule for testing.
 *
 * Enforces:
 * 1. Exactly current calendar date
 * 2. Exactly current hourly slot (0-23)
 * 3. Max ONE notification per hour
 * 4. Status must be 'confirmed'
 */
export async function getActiveHourlyBooking() {
  try {
    const now = new Date();
    
    // Format current date in YYYY-MM-DD
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const todayDateKey = `${year}-${month}-${day}`;
    const currentHour = now.getHours();

    if (DEMO_MODE) {
      // Look up current date in demo schedule, or fallback to today's date entries
      const dateBookings = SAMPLE_BOOKINGS_BY_DATE[todayDateKey] || SAMPLE_BOOKINGS_BY_DATE['2026-10-08'] || [];
      const matchingBooking = dateBookings.find(
        (b) => b.hour === currentHour && b.status === 'confirmed'
      );
      return matchingBooking || null;
    }

    // LIVE MODE:
    // If a backend webhook or GoHighLevel sync endpoint is configured, fetch live bookings.
    // If no endpoint or no booking found for this specific hour, returns null.
    if (typeof window !== 'undefined' && window.__PINNANCLE_LIVE_BOOKINGS__) {
      const liveBookings = window.__PINNANCLE_LIVE_BOOKINGS__;
      return liveBookings.find(
        (b) =>
          b.bookingDate === todayDateKey &&
          b.hour === currentHour &&
          b.status === 'confirmed'
      ) || null;
    }

    // In LIVE MODE with no active booking for the current hour: strictly return null (no fake bookings).
    return null;
  } catch (err) {
    console.error('Error fetching consultation activity:', err);
    return null;
  }
}
