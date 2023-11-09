import { axios } from "@/lib/axios";
import { Todo } from "@/lib/types";
import { useMutation, useQueryClient } from "react-query";

export const deleteTodo = async (todoId: string) => {
  const { data } = await axios.delete(`/todos/${todoId}`);

  return data;
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todoId: string) => deleteTodo(todoId),
    onMutate: async (todoId) => {
      await queryClient.cancelQueries("todos");

      const previousTodos = queryClient.getQueryData<Todo[]>("todos");

      queryClient.setQueryData(
        "todos",
        previousTodos?.filter((t) => t.id !== todoId)
      );

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
