import { axios } from "@/lib/axios";
import { Todo } from "@/lib/types";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

export const deleteTodo = async (todoId: string) => {
  const { data } = await axios.delete(`/todos/${todoId}`);

  return data;
};

export const deleteAllTodos = async () => {
  const { data } = await axios.delete(`/todos/all`);

  return data;
};

export const deleteDoneTodos = async () => {
  const { data } = await axios.delete(`/todos/done`);

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
      toast.error("Something went wrong");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      toast.success("Todo deleted successfully");
    },
  });
};

export const useDeleteAllTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAllTodos,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      toast.success("All todos deleted successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};

export const useDeleteDoneTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDoneTodos,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      toast.success("Done todos deleted successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};
