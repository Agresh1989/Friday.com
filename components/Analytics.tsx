
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

const data = [
  { name: 'Mon', completed: 12, planned: 15 },
  { name: 'Tue', completed: 19, planned: 18 },
  { name: 'Wed', completed: 15, planned: 17 },
  { name: 'Thu', completed: 22, planned: 20 },
  { name: 'Fri', completed: 30, planned: 25 },
];

const productivityData = [
  { time: '9am', score: 45 },
  { time: '11am', score: 85 },
  { time: '1pm', score: 65 },
  { time: '3pm', score: 95 },
  { time: '5pm', score: 70 },
  { time: '7pm', score: 40 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Weekly Task Velocity</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="completed" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="planned" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Team Focus Score</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={productivityData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide />
                <Tooltip 
                   contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">Friday Milestone Insights</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-lg">Based on current velocity, your team is on track to finish 92% of committed tasks by Friday 4 PM.</p>
          <div className="flex gap-4">
             <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">14</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Blocked Items</div>
             </div>
             <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">8.4h</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Avg. Task Cycle</div>
             </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      </div>
    </div>
  );
};

export default Analytics;
