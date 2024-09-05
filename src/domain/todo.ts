export class Todo {
  constructor(public id: string, public title: string, public done: boolean, public created_at: string) {}

  public static newTodo(id: string, title: string, done: boolean, created_at: string): Todo {
    return new Todo(id, title, done, formatDate(created_at));
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // getMonth() は0から始まるため、1を足す
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}/${month}/${day}`;
}
