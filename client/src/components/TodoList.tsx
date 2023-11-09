import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import TodoItem from "./TodoListItem";
import { useTodos } from "@/service/api/todos/getTodos";

const TodoItemList = () => {
  const todosQuery = useTodos();

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
        <Button className="w-100">All</Button>
        <Button className="w-100">Done</Button>
        <Button className="w-100">Todo</Button>
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

export default TodoItemList;
