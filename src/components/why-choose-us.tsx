import React from 'react';

export const WhyChooseUs = () => {
  const points = [
    { title: 'Built for Nepal', desc: 'Tax + compliance ready out of the box.' },
    { title: 'Secure & Reliable', desc: 'Bank-grade encryption protecting your data at all times.' },
    { title: 'Scalable Architecture', desc: 'Grows with you from 1 to 10,000 employees effortlessly.' },
    { title: 'API Integrations Ready', desc: 'Connect with banks, payment gateways, and third-party tools.' },
    { title: 'Cloud-based & Fast', desc: 'Access your business anywhere, anytime, with blazing fast speed.' },
  ];

  return (
    <div className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
      <div className="absolute opacity-5 -top-24 -right-24 text-[400px] text-primary-900 select-none pointer-events-none">
        #
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">
              Why Choose Himalaya Neo Tech?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We're not just another software. We built an ecosystem tailored for the modern enterprise that demands speed, compliance, and scalability.
            </p>
            
            <div className="space-y-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{point.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-8">
                <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-16 h-16 rounded-full border-4 border-white dark:border-slate-700 shadow-md" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Suman Sharma</h4>
                  <p className="text-slate-500 text-sm">Finance Director, TechCorp Hub</p>
                </div>
              </div>
              <p className="text-xl italic text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                "This system completely simplified our accounting and tax workflow. What used to take our team two weeks at the end of the month now takes exactly two days. The localized IRD reporting is a lifesaver."
              </p>
              <div className="mt-8 flex gap-1 text-yellow-400">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
