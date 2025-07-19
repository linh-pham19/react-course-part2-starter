// create a single instance of APIClient for todos

import { Todo } from "../hooks/useTodos";
import APIClient from "./apiClient";

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

export default new APIClient<Todo>('/todos');