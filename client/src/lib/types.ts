export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export type TodoDto = {
  title: string;
  done?: boolean;
};
