import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

import { Todo } from "@/lib/types";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { axios } from "@/lib/axios";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const updateTodo = async (todo: Todo) => {
    const response = await axios.put(`/todos/${todo.id}`, todo);
    console.log(response);
  };

  const deleteTodo = () => {
    const isConfirmed = confirm("Are you sure to delete todo?");
    if (isConfirmed) {
      axios.delete(`/todos/${todo.id}`);
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
