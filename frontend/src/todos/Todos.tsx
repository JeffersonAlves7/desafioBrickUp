import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoFetchAction,
  getTodosFetchAction,
  postTodoFetchAction,
  putTodoFetchAction,
} from "./actions";
import { Button, Flex, Input, Select, Spin, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { selectTodos } from "./reducer";
import Column from "antd/es/table/Column";
import { EnumTodoStatus, Todo } from "./types";

export default function Todos() {
  const [textTodo, setTextTodo] = useState("");
  const [descriptionTodo, setDescriptionTodo] = useState("");

  const handleAddTodo = () => {
    if (textTodo.trim() !== "") {
      dispatcher(
        postTodoFetchAction({
          title: textTodo,
          description: descriptionTodo,
        })
      );
      setTextTodo("");
      setDescriptionTodo("");
    }
  };

  function handleChangeStatus(id: Todo["id"], status: EnumTodoStatus) {
    dispatcher(
      putTodoFetchAction({
        id,
        status,
      })
    );
    return;
  }

  function handleRemoveTodo(id: Todo["id"]) {
    dispatcher(deleteTodoFetchAction(id));
  }

  const todos = useSelector(selectTodos);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(getTodosFetchAction());
  }, []);

  const dataSource = todos.data.map((todo) => {
    return {
      key: todo.id,
      ...todo,
    };
  });

  return (
    <>
      {todos.loading && (
        <div
          className="example"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin />
        </div>
      )}

      <Flex vertical gap={10}>
        <Flex gap={10} wrap="wrap">
          <Input
            value={textTodo}
            required
            onChange={(e) => setTextTodo(e.target.value)}
            placeholder="Todo title here"
            style={{
              width: "42%",
              minWidth: "200px",
            }}
          />
          <Input
            value={descriptionTodo}
            onChange={(e) => setDescriptionTodo(e.target.value)}
            placeholder="Todo description here"
            style={{
              width: "42%",
              minWidth: "200px",
            }}
          />
          <Button type="primary" onClick={handleAddTodo}>
            Add Todo
          </Button>
        </Flex>

        <div style={{ overflow: "auto" }}>
          <Table dataSource={dataSource}>
            <Column title="Title" dataIndex="title" key="title" />

            <Column
              title="Description"
              dataIndex="description"
              key="description"
            />

            <Column
              title="Status"
              dataIndex="status"
              key="status"
              render={(_: string, todo: Todo) => {
                return (
                  <Select
                    style={{ width: 200 }}
                    value={todo.status}
                    onChange={(value: any) => {
                      handleChangeStatus(todo.id, value);
                    }}
                    options={Object.keys(EnumTodoStatus).map((option) => {
                      return {
                        label: option,
                        value: Reflect.get(EnumTodoStatus, option),
                      };
                    })}
                  />
                );
              }}
            />

            <Column
              title="Apagar"
              dataIndex="apagar"
              key="apagar"
              render={(_, todo: Todo) => {
                return (
                  <Button
                    danger
                    onClick={() => handleRemoveTodo(todo.id)}
                    key="remove"
                  >
                    <DeleteOutlined />
                  </Button>
                );
              }}
            />
          </Table>
        </div>
      </Flex>
    </>
  );
}
