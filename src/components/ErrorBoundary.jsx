import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full py-16 px-6 bg-brand-charcoal/60 border border-white/10 rounded-3xl text-center my-6 max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-brand-lime">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">
            {this.props.title || 'Component Unavailable'}
          </h3>
          <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
            This section encountered a temporary display issue. The rest of the platform remains fully functional.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-brand-lime transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload Section</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
