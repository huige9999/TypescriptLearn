import { useState, useEffect } from "react"
import {Todo,Filters} from "../types/todos"


export function useTodosData() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("全部");
  const [filters, ] = useState<Filters>(["全部", "未完成", "已完成"]);

  useEffect(() => {
    setTodos([
      { id: 1, text: "Learn React", done: true },
      { id: 2, text: "Learn TypeScript", done: false },
      { id: 3, text: "Learn Vue", done: false },
      { id: 4, text: "Learn Java", done: false },
    ])
  }, [])

  const addTodo = (text: string) => { 
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      done: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => { 
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => { 
    setTodos(todos.map(todo => { 
      if (todo.id === id) { 
        todo.done = !todo.done
      }
      return todo;
    }))
  }

  const filterTodos = () => { 
    switch (filter) {
      case "未完成":
        return todos.filter(todo => !todo.done)
      case "已完成":
        return todos.filter(todo => todo.done)
      default:
        return todos
    }
  }
  
  return {
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    filter,
    filters,
    filterTodos,
    setFilter
  }
}