import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetAllTodo } from "./lib/todo";
import { Todo } from "./domain/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const getAlltodos = async () => {
      const todosData = await GetAllTodo();
      console.log(todosData);
      setTodos(todosData);
    };

    getAlltodos();
  }, []);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
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
