import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetAllTodo } from "./lib/todo";
import { Todo } from "./domain/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getAlltodo = async () => {
      const todosData = await GetAllTodo();
      setTodos(todosData);
      setisLoading(false);
    };

    getAlltodo();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <>
      <h1 data-testid="title">TODOリスト</h1>
      <TableContainer>
        <Table variant="simple" data-testid="table">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Done</Th>
              <Th>created_at</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => {
              return (
                <Tr key={todo.id}>
                  <Td>{todo.title}</Td>
                  <Td>{todo.done ? "TRUE" : "FALSE"}</Td>
                  <Td>{todo.created_at}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
