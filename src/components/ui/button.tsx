import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-500 hover:to-secondary-400 text-white shadow-md hover:shadow-lg focus-visible:outline-primary-600",
    secondary: "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700",
    outline: "text-primary-600 border-2 border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30",
    ghost: "text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-none",
  };

  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};
