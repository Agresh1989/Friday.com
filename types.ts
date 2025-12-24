
export enum AppView {
  STRATEGY = 'STRATEGY',
  DASHBOARD = 'DASHBOARD',
  ANALYTICS = 'ANALYTICS'
}

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
