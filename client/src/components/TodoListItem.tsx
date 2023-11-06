import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

import { Todo } from "@/lib/types";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
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
          onChange={() => alert("todo done degisti")}
        />
        <button className="text-warning">
          <FaPencilAlt />
        </button>
        <button className="text-danger">
          <FaTrash />
        </button>
      </Stack>
    </Stack>
  );
};

export default TodoItem;
