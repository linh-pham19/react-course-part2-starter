import { useQuery } from "@tanstack/react-query";
import todoService, { Todo } from "../services/todoService";


  // const apiClient = new APIClient<Todo>('/todos');
const useTodos = () => {
      // const fetchTodos = async (): Promise<Todo[]> => {
      //   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      //   if (!res.ok) {
      //     console.log("failed")
      //     throw new Error(`Failed to fetch todos: ${res.statusText}`);
      //   }
      //   const data = await res.json();
      //   console.log(data)
      //   return data as Todo[];
      // };

      // return useQuery<Todo[], Error>({
      //   queryKey:['todos'],
      //   queryFn: fetchTodos,
      // })
      // const fetchTodos = () => 
      //   axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      //     .then((res) => res.data);


      return useQuery<Todo[],Error>({
        queryKey: ['todos'],
        queryFn: todoService.getAll,
        staleTime: 10 * 1000,
      })
    
}

export default useTodos;