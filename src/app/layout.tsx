import type { Metadata } from "next";
import "./globals.css";
import React from 'react';

export const metadata: Metadata = {
  title: "Himalaya Neo Tech Nepal - Smart Accounting & ERP",
  description: "Smart Accounting & ERP Software for Modern Businesses in Nepal. Manage accounting, tax, payroll, and enterprise operations in one unified system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-slate-50 text-slate-900 scroll-smooth">
        {children}
      </body>
    </html>
  );
}
