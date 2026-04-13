import React from 'react';

const expansionItems = [
  { title: "Invoice Management", icon: "📄" },
  { title: "Payment Tracking", icon: "💳" },
  { title: "Recurring Billing", icon: "🔄" },
  { title: "Tax Management", icon: "🏛️", badge: "IRD Ready" },
  { title: "Payroll System", icon: "👥" },
  { title: "Inventory Management", icon: "📦" },
];

export const FeatureExpansion = () => {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Streamline Your Business Operations
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything connects seamlessly. Stop jumping between different tools and manage your entire business from a single dashboard.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {expansionItems.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {item.badge && (
                <span className="absolute top-4 right-4 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
