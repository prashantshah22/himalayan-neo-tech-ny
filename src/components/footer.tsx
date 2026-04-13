import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.jpeg" 
                alt="Himalayan Neo Tech Logo" 
                width={32}
                height={32}
                className="w-8 h-8 rounded shrink-0 object-cover"
              />
              <span className="font-bold text-lg text-white">Himalaya Neo Tech Nepal</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Smart Accounting & ERP Software. Empowering Nepalese businesses with modern, scalable, and compliant enterprise solutions.
            </p>
            <div className="flex gap-4 cursor-pointer">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">ERP Modules</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Himalaya Neo Tech Nepal. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
