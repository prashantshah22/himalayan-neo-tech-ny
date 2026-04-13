import React from 'react';

const modules = [
  { title: "Accounting", desc: "Full-fledged double entry accounting with ledgers, journal entries, and balance sheets." },
  { title: "Tax & Compliance", desc: "Automated VAT/PAN calculations. Nepal IRD compliant reporting formats out of the box." },
  { title: "Payroll", desc: "Manage employee salaries, TDS, provident fund, CIT, and leave deductions effortlessly." },
  { title: "Inventory", desc: "Multi-location inventory, stock alerts, batch tracking, and barcode integration." },
  { title: "CRM", desc: "Track leads, manage client communications, and close more deals." },
  { title: "HRM", desc: "Employee attendance, performance reviews, document management, and onboarding." },
  { title: "Reporting & Analytics", desc: "Real-time dashboards, custom report builder, and data exports." }
];

export const ERPModules = () => {
  return (
    <div className="py-24 bg-white dark:bg-slate-950" id="erp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
              Comprehensive ERP Modules
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A fully integrated suite of enterprise modules designed to scale with your organization's growth.
            </p>
          </div>
          <button className="text-primary-600 dark:text-primary-400 font-semibold flex items-center hover:text-primary-700 transition-colors shrink-0">
            View All Features
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-2xl border ${idx === 0 ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white border-transparent shadow-xl lg:col-span-2' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary-300 dark:hover:border-primary-700'} transition-colors duration-300 group`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className={`text-xl font-bold mb-3 ${idx === 0 ? 'text-white' : 'text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'} transition-colors`}>
                    {mod.title}
                  </h3>
                  <p className={idx === 0 ? 'text-primary-100' : 'text-slate-600 dark:text-slate-400'}>
                    {mod.desc}
                  </p>
                </div>
                <div className={`mt-6 w-10 h-10 rounded-full flex items-center justify-center ${idx === 0 ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30'} transition-colors`}>
                  <svg className={`w-5 h-5 ${idx === 0 ? 'text-white' : 'text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
