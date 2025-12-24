
import React from 'react';
import { Icons } from '../constants';

const StrategyNarrative: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20 px-4">
      {/* Hero Header */}
      <section className="text-center py-12 bg-white rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Friday.com <span className="text-blue-600">Product Strategy</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
          Comprehensive analysis and brand narrative for the next generation of collaborative productivity software.
        </p>
      </section>

      {/* 1. Product Overview */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Icons.FileText /></div>
          <h2 className="text-2xl font-bold text-slate-800">1. Product Overview</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-blue-600 mb-2">What Friday.com Does</h3>
            <p className="text-slate-600 text-sm leading-6">
              Friday.com is a unified Work Operating System (WorkOS) that aggregates tasks, projects, and communication into a visual, end-of-week oriented dashboard. It focuses on the "Finish Line" mentality, helping teams clear their plates before the weekend.
            </p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-blue-600 mb-2">Target Users</h3>
            <p className="text-slate-600 text-sm leading-6">
              Mid-to-large scale agile teams, high-growth startups, and individual power-users who manage cross-functional projects and require high visibility into blocking dependencies.
            </p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-blue-600 mb-2">Core Problem Solved</h3>
            <p className="text-slate-600 text-sm leading-6">
              Eliminates "Friday Fatigue"—the feeling of an unfinished week. It solves fragmented task tracking and the lack of high-level context by providing a single source of truth for "What is done" vs "What is left".
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Features */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-lg text-green-600"><Icons.Layout /></div>
          <h2 className="text-2xl font-bold text-slate-800">2. Key Features</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Dynamic Boards", desc: "Customizable Kanban and Table views with instant state synchronization across the team." },
            { title: "Friday Huddles", desc: "Automated end-of-week summaries that highlight achievements and surface risks." },
            { title: "Visual Analytics", desc: "Real-time burn-down charts and productivity heatmaps to track velocity." },
            { title: "Priority Matrix", desc: "Intelligent sorting that moves critical path items to the forefront automatically." }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl items-start">
              <div className="mt-1 text-green-600"><Icons.CheckCircle /></div>
              <div>
                <h4 className="font-bold text-slate-800">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Value Proposition */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Icons.BarChart /></div>
          <h2 className="text-2xl font-bold text-slate-800">3. User Value Proposition</h2>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icons.CheckCircle /> For Individual Contributors
              </h3>
              <ul className="space-y-3 text-blue-50 text-sm">
                <li>• Clear daily focus with 'Next Up' prioritization.</li>
                <li>• Reduced notification noise through smart task-grouping.</li>
                <li>• Satisfaction of seeing the "All Done" state every Friday.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icons.Users /> For Managers & Founders
              </h3>
              <ul className="space-y-3 text-blue-50 text-sm">
                <li>• Total operational transparency without micro-management.</li>
                <li>• Faster decision-making with data-backed project health scores.</li>
                <li>• Higher team morale by celebrating weekly wins automatically.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Primary Use Cases */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Icons.Calendar /></div>
          <h2 className="text-2xl font-bold text-slate-800">4. Primary Use Cases</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <h4 className="font-bold text-slate-800">SaaS Engineering</h4>
            <p className="text-sm text-slate-600 mt-1">Managing sprints, PR reviews, and deployment cycles with high-velocity visibility.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-bold text-slate-800">Marketing Agencies</h4>
            <p className="text-sm text-slate-600 mt-1">Tracking multi-client campaigns and creative assets across disparate teams.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h4 className="font-bold text-slate-800">Startup Founders</h4>
            <p className="text-sm text-slate-600 mt-1">High-level roadmapping while maintaining connection to day-to-day execution.</p>
          </div>
        </div>
      </section>

      {/* 5. Brand Messaging */}
      <section className="space-y-6 bg-slate-900 text-white p-12 rounded-3xl">
        <div className="text-center space-y-8">
          <div>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Brand Tagline</span>
            <h3 className="text-4xl font-black mt-2">Win your week by Friday.</h3>
          </div>
          <div className="max-w-xl mx-auto border-t border-slate-800 pt-8">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Elevator Pitch</span>
            <p className="text-xl text-slate-300 font-medium italic leading-relaxed mt-4">
              "Friday.com is the unified productivity operating system that turns complex workflows into clear action items, ensuring teams cross the finish line every single week with confidence and clarity."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyNarrative;
