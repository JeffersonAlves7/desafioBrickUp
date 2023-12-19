import { Button, Flex, Input, Select, Table } from "antd";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  Todo,
  TodoStatus,
  add,
  changeStatus,
  remove,
  selectTodos,
} from "./todosSlice";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import Column from "antd/es/table/Column";

export function Todos() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(add(newTodo));
      setNewTodo("");
    }
  };

  function handleRemoveTodo(id: number) {
    dispatch(remove(id));
  }

  function handleChangeStatus(id: number, status: TodoStatus) {
    dispatch(changeStatus({ id, status }));
  }

  const dataSource = todos.map((todo) => {
    return {
      key: todo.id,
      ...todo,
    };
  });

  return (
    <Flex vertical gap={10}>
      <Flex gap={10}>
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />

        <Button type="primary" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Flex>

      <Table dataSource={dataSource}>
        <Column title="Title" dataIndex="title" key="title" />

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
                options={Object.keys(TodoStatus).map((option) => {
                  return {
                    label: option,
                    value: Reflect.get(TodoStatus, option),
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
    </Flex>
  );
}
