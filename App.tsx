
import React, { useState } from 'react';
import { AppView } from './types';
import { Icons } from './constants';
import StrategyNarrative from './components/StrategyNarrative';
import KanbanBoard from './components/KanbanBoard';
import Analytics from './components/Analytics';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.STRATEGY:
        return <StrategyNarrative />;
      case AppView.ANALYTICS:
        return <Analytics />;
      case AppView.DASHBOARD:
      default:
        return <KanbanBoard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic">
            F
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Friday.com</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <button 
            onClick={() => setCurrentView(AppView.DASHBOARD)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              currentView === AppView.DASHBOARD 
              ? 'bg-blue-50 text-blue-600 shadow-sm border border-blue-100' 
              : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Icons.Layout />
            Dashboard
          </button>
          <button 
             onClick={() => setCurrentView(AppView.ANALYTICS)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              currentView === AppView.ANALYTICS 
              ? 'bg-blue-50 text-blue-600 shadow-sm border border-blue-100' 
              : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Icons.BarChart />
            Analytics
          </button>
          <button 
             onClick={() => setCurrentView(AppView.STRATEGY)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              currentView === AppView.STRATEGY 
              ? 'bg-blue-50 text-blue-600 shadow-sm border border-blue-100' 
              : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Icons.FileText />
            Product Strategy
          </button>
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-900 rounded-2xl p-4 text-white">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Weekly Goal</h4>
            <p className="text-sm font-medium mb-3">14/20 Tasks Finished</p>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[70%]"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-slate-800 capitalize">
              {currentView.replace('_', ' ').toLowerCase()}
            </h2>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://picsum.photos/30/30?random=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Team member" />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-bold">+2</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-slate-100 border-none rounded-full px-4 py-1.5 text-sm w-64 focus:ring-2 focus:ring-blue-500 transition-all outline-none" 
              />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Icons.CheckCircle />
              Done
            </button>
          </div>
        </header>

        {/* Dynamic View Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          {renderView()}
        </div>

        {/* Mobile Navigation (Persistent CTA/Nav) */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 bg-slate-900 rounded-2xl p-4 shadow-2xl flex justify-around items-center z-50">
           <button onClick={() => setCurrentView(AppView.DASHBOARD)} className={`p-2 ${currentView === AppView.DASHBOARD ? 'text-blue-400' : 'text-slate-400'}`}>
              <Icons.Layout />
           </button>
           <button onClick={() => setCurrentView(AppView.ANALYTICS)} className={`p-2 ${currentView === AppView.ANALYTICS ? 'text-blue-400' : 'text-slate-400'}`}>
              <Icons.BarChart />
           </button>
           <button onClick={() => setCurrentView(AppView.STRATEGY)} className={`p-2 ${currentView === AppView.STRATEGY ? 'text-blue-400' : 'text-slate-400'}`}>
              <Icons.FileText />
           </button>
        </div>
      </main>
    </div>
  );
};

export default App;
