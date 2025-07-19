import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {useAddTodo} from "../routing/hooks/useAddTodo";

const TodoForm = () => {


  const ref = useRef<HTMLInputElement>(null);
  // this should return a mutation object
  const addTodo = useAddTodo(() =>{
    if (ref.current) {
      ref.current.value = ""; // Clear the input field after adding a todo
    }
  })

  return (
    <>
      {addTodo.error?.message && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value) {
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
            });
          }
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
