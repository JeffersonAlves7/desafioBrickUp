import axios from "axios";
import {
  EnumTodoStatus,
  TodosChangeDto,
  TodosCreationDto,
} from "../todos/types";

export const axiosConfig = axios.create({
  baseURL: "http://localhost:8080",
});

export const Api = {
  getTodosFetch: () =>
    axiosConfig
      .get("/tasks")
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      }),

  postTodosFetch: async (body: TodosCreationDto) => {
    return axiosConfig
      .post("/task", {
        ...body,
        status: body?.status || EnumTodoStatus.BACKLOG,
      })
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      });
  },

  putTodosFetch: (body: TodosChangeDto) =>
    axiosConfig
      .put(`/task/${body.id}`, body)
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      }),

  deleteTodosFetch: (id: string) =>
    axiosConfig
      .delete(`/task/${id}`)
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      }),
};
