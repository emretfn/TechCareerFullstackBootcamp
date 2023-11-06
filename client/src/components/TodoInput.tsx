import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSolidBook } from "react-icons/bi";

const TodoInput = () => {
  return (
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
          aria-label="Todo"
          aria-describedby="todo"
        />
      </InputGroup>
      <Button>Add new task</Button>
    </Stack>
  );
};

export default TodoInput;
