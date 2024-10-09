export enum TaskStatus {
  BACKLOG = 'BACKLOG',
  PENDING = 'PENDING',
  TODO = 'TODO',
  PROCESSING = 'PROCESSING',
  DONE = 'DONE'
}

export interface Task {
  _id?: number;
  title: string;
  description: string;
  timestamp?: Date;
  status: TaskStatus;
}

export interface TaskField {
  id: number;
  name: string;
  tasks: string[];
}
