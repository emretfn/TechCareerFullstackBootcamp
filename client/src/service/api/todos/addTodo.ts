import { useMutation, useQueryClient } from "react-query";

import { axios } from "@/lib/axios";
import { Todo, TodoDto } from "@/lib/types";

export const addTodo = async (todo: TodoDto) => {
  const { data } = await axios.post("/todos", todo);

  return data;
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo: TodoDto) => addTodo(todo),
    onMutate: async (todo) => {
      await queryClient.cancelQueries("todos");

      const previousTodos = queryClient.getQueryData<Todo[]>("todos");

      queryClient.setQueryData("todos", [...(previousTodos ?? []), todo]);

      return { previousTodos };
    },
    onError: (_, __, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};
