import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import TodoItem from "./TodoListItem";
import { useTodos } from "@/service/api/todos/getTodos";
import { useState } from "react";

const TodoList = () => {
  const [filter, setFilter] = useState<"all" | "done" | "todo">("all");
  const todosQuery = useTodos({
    select: (todos) => {
      switch (filter) {
        case "done":
          return todos.filter((todo) => todo.done);
        case "todo":
          return todos.filter((todo) => !todo.done);
        default:
          return todos;
      }
    },
  });

  if (todosQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!todosQuery.data) {
    return null;
  }

  return (
    <Stack gap={4}>
      {/* Filter Todos */}
      <Stack direction="horizontal" className="justify-content-between" gap={4}>
        <Button className="w-100" onClick={() => setFilter("all")}>
          All
        </Button>
        <Button className="w-100" onClick={() => setFilter("done")}>
          Done
        </Button>
        <Button className="w-100" onClick={() => setFilter("todo")}>
          Todo
        </Button>
      </Stack>
      {/* Todo List */}
      <Stack gap={3}>
        {todosQuery.data.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Stack>
    </Stack>
  );
};

export default TodoList;
