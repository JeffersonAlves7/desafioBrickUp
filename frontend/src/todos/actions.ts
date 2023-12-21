import { Todo, TodosChangeDto, TodosCreationDto } from "./types";

export enum TODOS_ACTIONS {
  POST_TODO_FETCH = "todos/POST_TODO_FETCH",
  POST_TODO_FETCH_SUCCESS = "todos/POST_TODO_FETCH_SUCCESS",
  POST_TODO_FETCH_FAILURE = "todos/POST_TODO_FETCH_FAILURE",

  GET_TODOS_FETCH = "todos/GET_TODOS_FETCH",
  GET_TODOS_FETCH_SUCESS = "todos/GET_TODOS_FETCH_SUCESS",
  GET_TODOS_FETCH_FAILURE = "todos/GET_TODOS_FETCH_FAILURE",

  DELETE_TODO_FETCH = "todos/DELETE_TODO_FETCH_FETCH",
  DELETE_TODO_FETCH_SUCCESS = "todos/DELETE_TODO_FETCH_SUCCESS",
  DELETE_TODO_FETCH_FAILURE = "todos/DELETE_TODO_FETCH_FAILURE",

  PUT_TODO_FETCH = "todos/PUT_TODO_FETCH",
  PUT_TODO_FETCH_SUCCESS = "todos/PUT_TODO_FETCH_SUCCESS",
  PUT_TODO_FETCH_FAILURE = "todos/PUT_TODO_FETCH_FAILURE",
}

export function deleteTodoFetchAction(id: Todo["id"]) {
  return {
    type: TODOS_ACTIONS.DELETE_TODO_FETCH,
    payload: id,
  };
}

export function deleteTodoFetchSuccessAction(id: Todo["id"]) {
  return {
    type: TODOS_ACTIONS.DELETE_TODO_FETCH_SUCCESS,
    payload: id,
  };
}

export function deleteTodoFetchFailureAction(error: any) {
  return {
    type: TODOS_ACTIONS.DELETE_TODO_FETCH_FAILURE,
    payload: error,
  };
}

export function postTodoFetchAction(todoCreation: TodosCreationDto) {
  return {
    type: TODOS_ACTIONS.POST_TODO_FETCH,
    payload: todoCreation,
  };
}

export function postTodoFetchSuccessAction(todo: Todo) {
  return {
    type: TODOS_ACTIONS.POST_TODO_FETCH_SUCCESS,
    payload: todo,
  };
}

export function postTodoFetchFailureAction(error: any) {
  return {
    type: TODOS_ACTIONS.POST_TODO_FETCH_FAILURE,
    payload: error,
  };
}

export function getTodosFetchAction() {
  return {
    type: TODOS_ACTIONS.GET_TODOS_FETCH,
    payload: null,
  };
}

export function getTodosFetchSuccessAction(todos: Todo[]) {
  return {
    type: TODOS_ACTIONS.GET_TODOS_FETCH_SUCESS,
    payload: todos,
  };
}

export function getTodosFetchFailureAction(error: any) {
  return {
    type: TODOS_ACTIONS.GET_TODOS_FETCH_SUCESS,
    payload: error,
  };
}

export function putTodoFetchAction(todosChange: TodosChangeDto) {
  return {
    type: TODOS_ACTIONS.PUT_TODO_FETCH,
    payload: todosChange,
  };
}

export function putTodoFetchSuccessAction(todo: Todo) {
  return {
    type: TODOS_ACTIONS.PUT_TODO_FETCH_SUCCESS,
    payload: todo,
  };
}

export function putTodoFetchFailureAction(error: any) {
  return {
    type: TODOS_ACTIONS.PUT_TODO_FETCH_FAILURE,
    payload: error,
  };
}
