import { RootState } from "../app/store";
import { TODOS_ACTIONS } from "./actions";
import { TodosState } from "./types";

const initialState: TodosState = {
  data: [],
  loading: false,
  error: true,
};

export function todosReducer(state = initialState, action: any): TodosState {
  switch (action.type) {
    case TODOS_ACTIONS.GET_TODOS_FETCH:
      return {
        ...state,
        loading: true,
      };
    case TODOS_ACTIONS.GET_TODOS_FETCH_SUCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case TODOS_ACTIONS.GET_TODOS_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case TODOS_ACTIONS.POST_TODO_FETCH:
      return {
        ...state,
        loading: true,
      };
    case TODOS_ACTIONS.POST_TODO_FETCH_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    case TODOS_ACTIONS.POST_TODO_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case TODOS_ACTIONS.DELETE_TODO_FETCH:
      return {
        ...state,
        loading: true,
      };
    case TODOS_ACTIONS.DELETE_TODO_FETCH_SUCCESS:
      return {
        ...state,
        data: state.data.filter((todo) => todo.id != action.payload),
        loading: false,
      };
    case TODOS_ACTIONS.DELETE_TODO_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case TODOS_ACTIONS.PUT_TODO_FETCH:
      return {
        ...state,
        loading: true,
      };
    case TODOS_ACTIONS.PUT_TODO_FETCH_SUCCESS:
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id != action.payload.id) {
            return todo;
          }
          return action.payload;
        }),
        loading: false,
      };
    case TODOS_ACTIONS.PUT_TODO_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export const selectTodos = (state: RootState) => state.todos;
