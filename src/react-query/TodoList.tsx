import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = ()=> {
  const fetchTodos = async (): Promise<Todo[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!res.ok) {
      throw new Error(`Failed to fetch todos: ${res.statusText}`);
    }
    const data = await res.json();
    return data as Todo[];
  };

  // const fetchTodos = () => 
  //   axios
  //     .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => 
  //      res.data);
  // query gets back an object with properties like data, error, isLoading, etc.
  // we get autore fetch, auto retry and caching
  const {data: todos, error} = useQuery<Todo[], Error>({
    // key is used to identify the cache internally
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
