import { useQuery } from "react-query";

import { axios } from "@/lib/axios";

import { Todo } from "@/lib/types";

export const getTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get("/todos");

  return data;
};

export const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });
};
