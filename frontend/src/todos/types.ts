export enum EnumTodoStatus {
  BACKLOG = "BACKLOG",
  STOPPED = "STOPPED",
  RUNNING = "RUNNING",
  FINISHED = "FINISHED",
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: EnumTodoStatus;
}

export interface TodosCreationDto {
  title: string;
  description?: string;
  status?: EnumTodoStatus;
}

export interface TodosChangeDto {
  id: string;
  title?: string;
  description?: string;
  status?: EnumTodoStatus;
}

export interface TodosState {
  data: Todo[];
  loading: boolean;
  error: boolean;
}
