import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import TodoItem from "./TodoListItem";
import { useEffect, useState } from "react";
import { axios } from "@/lib/axios";
import { Todo } from "@/lib/types";

const TodoItemList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get("/todos");
      setTodos(data);
    }

    getTodos();
  }, []);

  return (
    <Stack gap={4}>
      {/* Filter Todos */}
      <Stack direction="horizontal" className="justify-content-between" gap={4}>
        <Button className="w-100">All</Button>
        <Button className="w-100">Done</Button>
        <Button className="w-100">Todo</Button>
      </Stack>
      {/* Todo List */}
      <Stack gap={3}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Stack>
    </Stack>
  );
};

export default TodoItemList;
