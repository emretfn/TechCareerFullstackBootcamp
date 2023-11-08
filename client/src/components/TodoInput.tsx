import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSolidBook } from "react-icons/bi";
import { useState } from "react";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add todo
  };

  return (
    <form onSubmit={handleAddTodo}>
      <Stack gap={2} className="border p-3 rounded">
        <InputGroup className="mb-3">
          <InputGroup.Text
            style={{
              backgroundColor: "var(--bs-primary)",
              color: "var(--bs-light)",
            }}
          >
            <BiSolidBook />
          </InputGroup.Text>
          <Form.Control
            placeholder="New Todo"
            name="todo"
            aria-label="Todo"
            aria-describedby="todo"
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
          />
        </InputGroup>
        <Button type="submit">Add new task</Button>
      </Stack>
    </form>
  );
};

export default TodoInput;
