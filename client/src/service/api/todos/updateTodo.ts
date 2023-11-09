import { axios } from "@/lib/axios";
import { Todo, TodoDto } from "@/lib/types";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

const updateTodo = async (todoId: string, todo: TodoDto) => {
  const { data } = await axios.put(`/todos/${todoId}`, todo);

  return data;
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ todoId, todo }: { todoId: string; todo: TodoDto }) =>
      updateTodo(todoId, todo),
    onMutate: async ({ todoId, todo }) => {
      await queryClient.cancelQueries("todos");

      const previousTodos = queryClient.getQueryData<Todo[]>("todos");

      queryClient.setQueryData(
        "todos",
        previousTodos?.map((t) => {
          if (t.id === todoId) {
            return todo;
          }

          return t;
        })
      );

      return { previousTodos };
    },
    onError: (_, __, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
      toast.error("Something went wrong");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      toast.success("Todo updated successfully");
    },
  });
};
