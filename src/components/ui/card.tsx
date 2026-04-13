import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`glass-card p-8 transition-transform duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};
