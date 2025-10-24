# Directory Structure
```
vite-react/src/App.tsx
vite-react/src/components/items/AddItem.tsx
vite-react/src/components/items/FilterItem.tsx
vite-react/src/components/items/Item.tsx
vite-react/src/components/items/ItemList.tsx
vite-react/src/hooks/useTodosData.ts
vite-react/src/types/todos.ts
vite-react/src/views/TodoView.tsx
```

# Files

## File: vite-react/src/App.tsx
```typescript
import TodoView from "./views/TodoView"

function App() {
  return (
    <>
      <TodoView></TodoView>
    </>
  )
}

export default App
```

## File: vite-react/src/components/items/AddItem.tsx
```typescript
import {useState} from "react"
type Props = {
  onAddItem: (text: string) => void
}

const AddItem = ({ onAddItem }: Props) => {
  const [text, setText] = useState<string>('')
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => { 
    // 注意form提交应该阻止默认事件，不然会刷新页面
    e.preventDefault()
    onAddItem(text);
    setText('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setText(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={ handleChange }
        />
        <button type="submit">添加</button>
      </form>
    </>
  )
}

export default AddItem
```

## File: vite-react/src/components/items/FilterItem.tsx
```typescript
import { Filters } from "../../types/todos"
interface IProps{
  filters: Filters
  setFilter: (filter: string) => void
}

const FilterItem = ({ filters, setFilter }: IProps) => {
  const handleFilter = (filter: string) => { 
    setFilter(filter)
  }
  return (
    <div>
      {
        filters.map(filter => <button onClick={() => { handleFilter(filter) }}>{ filter }</button> )
      }
    </div>
  )
}

export default FilterItem
```

## File: vite-react/src/components/items/Item.tsx
```typescript
import { Todo } from "../../types/todos"

interface IProps{
  todo: Todo
  children: React.ReactNode // 定义react的children类型
  style: React.CSSProperties // 定义style的类型
}

const Item = ({todo, style, children}: IProps) => {
  return (
    <li style={style}>
      {todo.text}
      {children}
    </li>
  )
}

export default Item
```

## File: vite-react/src/components/items/ItemList.tsx
```typescript
import { Todo } from "../../types/todos"
import Item from "./Item"
interface IProps {
  todos: Todo[]
  onDel: (id: number) => void
  onToggle: (id: number) => void
  children: React.ReactNode
}

const ItemList:React.FC<IProps> = ({todos, children,onDel,onToggle}) => {
  return (
    <div>
      {children}
      <ul>
        {todos.map(todo => { 
          return <Item
            key={todo.id}
            todo={todo}
            style={todo.done ? {textDecoration: "line-through"} : {}}
          >
            <button
              onClick={() => { 
                onToggle(todo.id)
              }}
            >
              {todo.done ? "已完成" : "未完成"}
            </button>
            <button
              onClick={() => { 
                onDel(todo.id)
              }}
            >删除</button>
          </Item>
        })}
      </ul>
    </div>
  )
}

export default ItemList
```

## File: vite-react/src/hooks/useTodosData.ts
```typescript
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
```

## File: vite-react/src/types/todos.ts
```typescript
export interface Todo { 
  id: number
  text: string
  done: boolean
}

export type Filters = ["全部", "未完成", "已完成"];
```

## File: vite-react/src/views/TodoView.tsx
```typescript
import AddItem from "../components/items/AddItem"
import FilterItem from "../components/items/FilterItem"
import ItemList from "../components/items/ItemList"
import { useTodosData } from "../hooks/useTodosData"
const TodoView = () => {
  const { deleteTodo, toggleTodo, addTodo,filterTodos,filters,setFilter } = useTodosData();
  return (
    <>
      <h1>TodoView</h1>
      <AddItem onAddItem={addTodo}></AddItem>
      <ItemList
        todos={filterTodos()}
        onDel={deleteTodo}
        onToggle={toggleTodo}>
        <h2>代办列表</h2>
      </ItemList>
      <FilterItem filters={filters} setFilter={setFilter}></FilterItem>
    </>
  )
}

export default TodoView
```
