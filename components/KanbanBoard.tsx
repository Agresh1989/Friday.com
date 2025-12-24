
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Task, Column } from '../types';

const INITIAL_DATA: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: '1', title: 'Refactor Auth Service', status: 'todo', priority: 'high', assignee: 'Alex K.' },
      { id: '2', title: 'Update Brand Guidelines', status: 'todo', priority: 'medium', assignee: 'Sarah L.' },
      { id: '5', title: 'Fix CSS Grid on Mobile', status: 'todo', priority: 'low', assignee: 'Alex K.' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      { id: '3', title: 'Friday.com Landing Page', status: 'in-progress', priority: 'high', assignee: 'John D.' },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      { id: '4', title: 'API Documentation', status: 'review', priority: 'medium', assignee: 'Emma W.' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: '6', title: 'Initial Project Setup', status: 'done', priority: 'medium', assignee: 'John D.' },
    ],
  },
];

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(INITIAL_DATA);
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [assigneeFilter, setAssigneeFilter] = useState<string>('all');

  const uniqueAssignees = useMemo(() => {
    const assignees = new Set<string>();
    columns.forEach(col => col.tasks.forEach(task => assignees.add(task.assignee)));
    return Array.from(assignees).sort();
  }, [columns]);

  const uniquePriorities = ['low', 'medium', 'high'];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-amber-100 text-amber-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

  const moveTask = (taskId: string, sourceColId: string, direction: 'left' | 'right') => {
    setColumns(prev => {
      const colIndices = prev.map(c => c.id);
      const sourceIdx = colIndices.indexOf(sourceColId);
      const destIdx = direction === 'left' ? sourceIdx - 1 : sourceIdx + 1;

      if (destIdx < 0 || destIdx >= prev.length) return prev;

      const newCols = [...prev];
      const taskToMove = newCols[sourceIdx].tasks.find(t => t.id === taskId);
      
      if (!taskToMove) return prev;

      newCols[sourceIdx] = {
        ...newCols[sourceIdx],
        tasks: newCols[sourceIdx].tasks.filter(t => t.id !== taskId)
      };

      newCols[destIdx] = {
        ...newCols[destIdx],
        tasks: [...newCols[destIdx].tasks, { ...taskToMove, status: newCols[destIdx].id as any }]
      };

      return newCols;
    });
  };

  const addTask = (colId: string) => {
    const newId = Math.random().toString(36).substr(2, 9);
    const newTask: Task = {
      id: newId,
      title: 'New Collaborative Task',
      status: colId as any,
      priority: 'medium',
      assignee: 'Unassigned'
    };

    setColumns(prev => prev.map(col => 
      col.id === colId ? { ...col, tasks: [newTask, ...col.tasks] } : col
    ));
  };

  const filteredColumns = useMemo(() => {
    return columns.map(col => ({
      ...col,
      tasks: col.tasks.filter(task => {
        const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
        const matchesAssignee = assigneeFilter === 'all' || task.assignee === assigneeFilter;
        return matchesPriority && matchesAssignee;
      })
    }));
  }, [columns, priorityFilter, assigneeFilter]);

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Priority:</label>
          <select 
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer text-slate-700"
          >
            <option value="all">All Priorities</option>
            {uniquePriorities.map(p => (
              <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Assignee:</label>
          <select 
            value={assigneeFilter}
            onChange={(e) => setAssigneeFilter(e.target.value)}
            className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer text-slate-700"
          >
            <option value="all">All Assignees</option>
            {uniqueAssignees.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        {(priorityFilter !== 'all' || assigneeFilter !== 'all') && (
          <button 
            onClick={() => { setPriorityFilter('all'); setAssigneeFilter('all'); }}
            className="text-xs text-blue-600 font-semibold hover:underline ml-auto"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Board Layout */}
      <div className="flex gap-6 overflow-x-auto pb-4 px-2 no-scrollbar h-full items-start">
        {filteredColumns.map((col, colIdx) => (
          <div key={col.id} className="flex-shrink-0 w-80 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-700 flex items-center gap-2">
                {col.title}
                <span className="text-xs bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full font-medium">
                  {col.tasks.length}
                </span>
              </h3>
            </div>
            
            <motion.div 
              layout
              className="bg-slate-100/50 rounded-2xl p-3 flex-1 overflow-y-auto space-y-3 min-h-[500px]"
            >
              <AnimatePresence initial={false} mode="popLayout">
                {col.tasks.map((task) => (
                  <motion.div 
                    layout
                    key={task.id} 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    className="group bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-shadow cursor-pointer relative"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded w-fit ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </div>
                      
                      {/* Movement Controls - Hover Visible */}
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {colIdx > 0 && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); moveTask(task.id, col.id, 'left'); }}
                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-blue-600"
                            title="Move Left"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          </button>
                        )}
                        {colIdx < filteredColumns.length - 1 && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); moveTask(task.id, col.id, 'right'); }}
                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-blue-600"
                            title="Move Right"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-slate-800 text-sm mb-4">{task.title}</h4>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                          {task.assignee.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-xs text-slate-500">{task.assignee}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {col.tasks.length === 0 && (
                <div className="flex flex-col items-center justify-center h-40 text-slate-400 italic text-xs border-2 border-dashed border-slate-200 rounded-xl">
                  No tasks here
                </div>
              )}
              
              <button 
                onClick={() => addTask(col.id)}
                className="w-full py-2 border-2 border-dashed border-slate-300 rounded-xl text-slate-400 text-sm hover:border-slate-400 hover:text-slate-500 transition-colors mt-2"
              >
                + Add Task
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
