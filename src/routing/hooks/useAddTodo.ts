import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoService, { Todo } from "../services/todoService";
interface AddTodoContext {
    previousTodos: Todo[] | undefined;
  }


export const useAddTodo = (onAdd: () =>void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
    //   mutationFn: (todo: Todo) =>
    //     axios
    //       .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
    //       .then((res) => res.data),
    // REMOVE THE ABOVE AS WE ARE USING APIClient
    mutationFn: todoService.post,
      onMutate: (newTodo: Todo) => {
        // get the previous todos from the cache
        const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
        // Optimistically update cache
        // This will immediately update the UI with the new todo
        // without waiting for the mutation to complete
        // queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        //   newTodo,
        // have to spread it like this to avoid undefined
        //   ...(todos || []),
        // ]);
        // BETTER APPROACH:
        queryClient.setQueryData<Todo>(['todos'], (todos = []) => [
            newTodo,
            ...todos,
        ])
        // This approach directly updates the cached data without needing to refetch it.
        // This is useful for optimistic updates where you want to immediately reflect the change in the UI
        // if (ref.current) {
        //   ref.current.value = ""; // Clear the input field
        // }
        onAdd(); // Call the onAdd callback to trigger any additional logic after adding a todo
        return { previousTodos }; // Return the previous todos for rollback in case of error
      },
  
      onSuccess: (savedTodo: Todo, newTodo: Todo, context: AddTodoContext) => {
        //   // Apprach to update the list: invalidate the cache to trigger a refetch of todos
        //   // causes the TodoList to refetch
        //   // This is a common pattern in React Query to ensure the UI is updated with the latest data
        //   console.log(savedTodo);
        //   // queryClient.invalidateQueries({
        //   //   queryKey: ['todos'],
        //   // })
        //   // APPROACH 2: Update the cache directly
        queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
          todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
        );
        //   // This approach directly updates the cached data without needing to refetch it.
        //   // This is useful for optimistic updates where you want to immediately reflect the change in the UI
        //   if (ref.current) {
        //     ref.current.value = ""; // Clear the input field
        //   }
        // return {previousTodos}
      },
      onError: (error: Error, newTodo: Todo, context: AddTodoContext) => {
        console.log("Error adding todo:", error.message);
        if (!context) return;
        // Rollback the optimistic update if the mutation fails
        queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
      },
    });
}