import React from 'react';
import { Button } from './ui/button';

export const CTASection = () => {
  return (
    <div className="relative py-24 bg-primary-900 border-t border-primary-800 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Start Managing Your Business Smarter Today
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses streamlining their accounting, tax, and ERP operations with Himalaya Neo Tech.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button className="bg-white text-primary-900 hover:bg-slate-100 hover:text-primary-800 py-4 px-10 text-lg shadow-xl shadow-primary-900/20">
            Get Started For Free
          </Button>
          <p className="text-primary-200 text-sm">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
};
