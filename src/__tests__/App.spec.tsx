import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { GetAllTodo } from "../lib/todo";
import { Todo } from "../domain/todo";

const mockGetAllTodo = jest
  .fn()
  .mockResolvedValue([
    new Todo("1", "title1", false, "2024-01-01T00:00:00Z"),
    new Todo("2", "title2", false, "2024-01-01T00:00:00Z"),
    new Todo("3", "title3", false, "2024-01-01T00:00:00Z"),
    new Todo("4", "title", false, "2024-01-01T00:00:00Z"),
  ]);

jest.mock("../lib/todo.ts", () => {
  return {
    GetAllTodo: () => mockGetAllTodo(),
  };
});
describe("App", () => {
  test("タイトルがあること", async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByTestId("table");
    });
    const title = screen.getByTestId("title");

    expect(title).toBeInTheDocument();
  });

  test("TODOが4つ表示されること", async () => {
    render(<App />);
    await waitFor(() => {
      screen.getAllByTestId("table");
      const table = screen.getByTestId("table"); // 単一のテーブル要素を取得
      const todos = table.querySelectorAll("tr");
      // const todos = screen.getAllByTestId("table").querySelectorAll("tr");
      expect(todos.length - 1).toBe(4);
    });
  });
});
