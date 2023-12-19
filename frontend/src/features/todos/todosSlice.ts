import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export enum TodoStatus {
  BACKLOG = "Backlog",
  STOPPED = "Stopped",
  RUNNING = "Running",
  FINISHED = "Finished",
}

export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
}

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [
    {
      id: 1,
      title: "Say Hello World",
      status: TodoStatus.BACKLOG,
    },
  ],
};

function getNextId(todos: Todo[]) {
  return Math.max(...todos.map((todo) => todo.id)) + 1;
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: getNextId(state.todos),
          title: action.payload,
          status: TodoStatus.BACKLOG,
        },
      ];
    },

    remove: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    changeStatus: (
      state,
      action: PayloadAction<{ id: number; status: TodoStatus }>
    ) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id != action.payload.id) return todo;

        return {
          ...todo,
          status: action.payload.status,
        };
      });

      console.log(state.todos);
    },
  },
});

export const { add, remove, changeStatus } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export const todosReducer = todosSlice.reducer;
