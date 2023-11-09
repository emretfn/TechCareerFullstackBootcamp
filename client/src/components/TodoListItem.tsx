import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

import { Todo } from "@/lib/types";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { useDeleteTodo } from "@/service/api/todos/deleteTodo";
import { useUpdateTodo } from "@/service/api/todos/updateTodo";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const mutationDelete = useDeleteTodo();
  const mutationUpdate = useUpdateTodo();

  const updateTodo = async (todo: Todo) => {
    mutationUpdate.mutateAsync({ todoId: todo.id, todo: todo });
  };

  const deleteTodo = () => {
    const isConfirmed = confirm("Are you sure to delete todo?");
    if (isConfirmed) {
      mutationDelete.mutateAsync(todo.id);
    }
  };

  const editTodo = () => {
    const newTodo = prompt("Change todo");
    if (newTodo) {
      updateTodo({
        ...todo,
        title: newTodo,
      });
    }
  };

  return (
    <Stack key={todo.id} direction="horizontal" className="border rounded p-3">
      <p
        className={todo.done ? "text-decoration-line-through text-danger" : ""}
      >
        {todo.title}
      </p>

      {/* Actions */}
      <Stack className="ms-auto" direction="horizontal" gap={1}>
        <Form.Check
          type="checkbox"
          checked={todo.done}
          onChange={() => updateTodo({ ...todo, done: !todo.done })}
          name="todoStatus"
        />
        <button className="text-warning" onClick={editTodo}>
          <FaPencilAlt />
        </button>
        <button className="text-danger" onClick={deleteTodo}>
          <FaTrash />
        </button>
      </Stack>
    </Stack>
  );
};

export default TodoItem;
