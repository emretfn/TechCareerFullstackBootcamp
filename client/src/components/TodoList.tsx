import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import TodoItem from "./TodoListItem";

const TodoItemList = () => {
  const mockTodo = [
    {
      id: "1",
      title: "Todo 1",
      done: false,
    },
    {
      id: "2",
      title: "Todo 2",
      done: true,
    },
    {
      id: "3",
      title: "Todo 3",
      done: false,
    },
  ];

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
        {mockTodo.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </Stack>
    </Stack>
  );
};

export default TodoItemList;
