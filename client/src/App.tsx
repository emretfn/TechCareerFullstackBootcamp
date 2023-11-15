import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
function App() {
  return (
    <Container className="mt-4">
      <Stack gap={4}>
        <TodoInput />
        <TodoList />
      </Stack>
    </Container>
  );
}

export default App;
