import React from 'react';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32 pb-16" id="home">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 blur-[100px] opacity-50 pointer-events-none">
        <div className="aspect-square w-[600px] rounded-full bg-gradient-to-tr from-primary-200 to-secondary-200 dark:from-primary-900/40 dark:to-secondary-900/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6 border border-primary-100 dark:border-primary-800/50">
              {/* <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span> */}
              Nepal's most simplest Accounting Software
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Smart Accounting & ERP Software for Modern Businesses
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Manage accounting, tax, payroll, and enterprise operations in one unified system. Scalable for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" className="py-4 px-8 text-lg">
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
              <Button variant="secondary" className="py-4 px-8 text-lg bg-white/50 backdrop-blur-sm">
                <svg className="mr-2 w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-700"></div>
                ))}
              </div> */}
              <p>Trusted by 500+ businesses</p>
            </div>
          </div>
          
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative z-10 w-full animate-fade-in-up">
            <div className="relative rounded-2xl bg-white/50 dark:bg-slate-800/50 p-2 backdrop-blur-xl border border-white/40 dark:border-slate-700 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-100/30 to-primary-100/30 dark:from-secondary-900/20 dark:to-primary-900/20 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Dashboard Mockup" 
                className="rounded-xl shadow-inner relative z-10 w-full object-cover border border-slate-200/50 dark:border-slate-700/50"
              />
              
              {/* Floating elements */}
              <div className="absolute -left-6 top-1/4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform hidden sm:flex">
                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold mb-1">Invoice Paid</p>
                  <p className="font-bold text-slate-900 dark:text-white">Rs. 45,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
