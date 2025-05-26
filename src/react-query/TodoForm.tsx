import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from '../routing/hooks/useTodos';
import axios from 'axios';

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
          .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
          .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
   
      // Apprach to update the list: invalidate the cache to trigger a refetch of todos
      // causes the TodoList to refetch
      // This is a common pattern in React Query to ensure the UI is updated with the latest data
      console.log(savedTodo)
         // queryClient.invalidateQueries({
      //   queryKey: ['todos'],
      // })
      // APPROACH 2: Update the cache directly
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [savedTodo, ...(todos || [])]);
      // This approach directly updates the cached data without needing to refetch it.
      // This is useful for optimistic updates where you want to immediately reflect the change in the UI
      if (ref.current) {
        ref.current.value = ''; // Clear the input field
      }
    }
});
  

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form className="row mb-3" onSubmit={event => {
      event.preventDefault();
      if(ref.current && ref.current.value) {
      addTodo.mutate({
        id: Date.now(),
        title: ref.current?.value,
        completed: false,
        userId: 1, // Assuming a default userId, you can modify this as needed
        // Note: The API will generate the id, so we can set it to 0 or leave it out
        // The API will handle the id generation
        // and return the created todo with the generated id.
        // If you want to handle the id in your application, you can do so after the mutation
        // is successful.
      })}
    }}>
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
