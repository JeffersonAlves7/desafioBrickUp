import { call, put, takeEvery } from "redux-saga/effects";
import { Api } from "./api";
import {
  TODOS_ACTIONS,
  deleteTodoFetchFailureAction,
  deleteTodoFetchSuccessAction,
  getTodosFetchFailureAction,
  getTodosFetchSuccessAction,
  postTodoFetchFailureAction,
  postTodoFetchSuccessAction,
  putTodoFetchFailureAction,
  putTodoFetchSuccessAction,
} from "../todos/actions";

function* getTodosFetch() {
  try {
    //@ts-ignore
    const todos = yield call(Api.getTodosFetch);
    yield put(getTodosFetchSuccessAction(todos));
  } catch (e) {
    yield put(getTodosFetchFailureAction(e));
  }
}

function* postTodoFetch(action: any) {
  try {
    //@ts-ignore
    const todo = yield call(Api.postTodosFetch, action.payload);
    yield put(postTodoFetchSuccessAction(todo));
  } catch (e) {
    yield put(postTodoFetchFailureAction(e));
  }
}

function* deleteTodoFetch(action: any) {
  try {
    //@ts-ignore
    yield call(Api.deleteTodosFetch, action.payload);
    yield put(deleteTodoFetchSuccessAction(action.payload));
  } catch (e) {
    yield put(deleteTodoFetchFailureAction(e));
  }
}

function* putTodoFetch(action: any) {
  try {
    //@ts-ignore
    const todo = yield call(Api.putTodosFetch, action.payload);
    yield put(putTodoFetchSuccessAction(todo));
  } catch (e) {
    yield put(putTodoFetchFailureAction(e));
  }
}

function* mySaga() {
  yield takeEvery(TODOS_ACTIONS.GET_TODOS_FETCH, getTodosFetch);
  yield takeEvery(TODOS_ACTIONS.POST_TODO_FETCH, postTodoFetch);
  yield takeEvery(TODOS_ACTIONS.DELETE_TODO_FETCH, deleteTodoFetch);
  yield takeEvery(TODOS_ACTIONS.PUT_TODO_FETCH, putTodoFetch);
}

export default mySaga;
