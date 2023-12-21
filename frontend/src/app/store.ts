import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import { todosReducer } from "../todos/reducer";

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;
