import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

export const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-800 to-secondary-700 text-white text-sm py-2 px-4 text-center font-medium">
        <span className="animate-pulse mr-2">🚀</span>
        Product Coming Soon! Happy New Year 2083! 
        <span className="animate-pulse ml-2">🎉</span>
      </div>
      
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Image 
                src="/logo.jpeg" 
                alt="Himalayan Neo Tech Logo" 
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg shadow-lg object-cover"
              />
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Himalaya Neo Tech
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center bg-white/50 dark:bg-slate-900/50 px-6 py-2 rounded-full border border-slate-200 dark:border-slate-800">
              <a href="#home" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 transition-colors font-medium text-sm">Home</a>
              <a href="#features" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 transition-colors font-medium text-sm">Features</a>
              <a href="#erp" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 transition-colors font-medium text-sm">ERP Modules</a>
              <a href="#pricing" className="text-slate-600 hover:text-primary-600 dark:text-slate-300 transition-colors font-medium text-sm">Pricing</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Login</Button>
              <Button variant="primary">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 p-2 rounded-md">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
