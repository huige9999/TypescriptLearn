# Directory Structure
```
exercise1.md
vite-react/package.json
vite-react/src/App.tsx
vite-react/src/components/items/AddItem.tsx
vite-react/src/components/items/FilterItem.tsx
vite-react/src/components/items/Item.tsx
vite-react/src/components/items/ItemList.tsx
vite-react/src/components/StatusIndicator.tsx
vite-react/src/hooks/useDebounce.ts
vite-react/src/hooks/useTodosData.ts
vite-react/src/types/todos.ts
vite-react/src/views/TodoView.tsx
```

# Files

## File: vite-react/package.json
```json
{
  "name": "vite-react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

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

## File: vite-react/src/components/StatusIndicator.tsx
```typescript
interface StatusIndicatorProps {
    status: 'loading' | 'success' | 'error';
    children?: React.ReactNode;
}

const getStatusDom = (status: string) => {
    switch (status) {
        case 'loading':
            return <div className="status-indicator loading">Loading...</div>;
        case 'success':
            return <div className="status-indicator success">Success!</div>;
        case 'error':
            return <div className="status-indicator error">Error!</div>;
        default:
            return null;
    }
}


const StatusIndicator = ({status}: StatusIndicatorProps) => {
    return (
        <>
            {getStatusDom(status)}
        </>
    )
}

export default StatusIndicator
```

## File: vite-react/src/hooks/useDebounce.ts
```typescript
import { useState, useEffect } from "react"

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
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

## File: vite-react/src/components/items/AddItem.tsx
```typescript
import {useState} from "react"
type Props = {
  onAddItem: (text: string) => void
}

const AddItem = ({ onAddItem }: Props) => {
  const [text, setText] = useState<string>('')

  const isValid = text.trim().length > 0;

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
        <button type="submit" disabled={!isValid}>添加</button>
      </form>
    </>
  )
}

export default AddItem
```

## File: vite-react/src/views/TodoView.tsx
```typescript
import AddItem from "../components/items/AddItem"
import FilterItem from "../components/items/FilterItem"
import ItemList from "../components/items/ItemList"
import StatusIndicator from "../components/StatusIndicator"
import { useTodosData } from "../hooks/useTodosData"
import { useDebounce } from "../hooks/useDebounce";
import { useState,useEffect } from "react";

const TodoView = () => {
  const { deleteTodo, toggleTodo, addTodo,filterTodos,filters,setFilter } = useTodosData();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      console.log("正在搜索...", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    <>
      <h1>TodoView</h1>
      <div className="search-item">
        <input type="text" placeholder="搜索待办事项..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <AddItem onAddItem={addTodo}></AddItem>
      <ItemList
        todos={debouncedSearchTerm.trim() ? filterTodos().filter(todo => todo.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) : filterTodos()}
        onDel={deleteTodo}
        onToggle={toggleTodo}>
        <h2>代办列表</h2>
      </ItemList>
      <FilterItem filters={filters} setFilter={setFilter}></FilterItem>
      <StatusIndicator status="error"></StatusIndicator>
    </>
  )
}

export default TodoView
```

## File: exercise1.md
```markdown
### 第二阶段：React + TypeScript 实战进阶 (基于 `09` 到 `11` 模块)


#### **练习 7：打造你的第一个自定义 Hook**

**任务：** 创建一个 `useDebounce` 自定义 Hook。

1.  **功能：** 这个 Hook 用于实现防抖功能，常用于搜索框等场景，避免频繁触发 API 请求。
2.  **创建 `hooks/useDebounce.ts` 文件。**
3.  **Hook 定义：**
    *   它应该是一个泛型 Hook: `useDebounce<T>(value: T, delay: number): T`。
    *   它接收两个参数：需要被防抖的 `value` (类型为 `T`) 和延迟时间 `delay` (毫秒)。
    *   它返回一个经过防抖处理后的值 (类型为 `T`)。
    *   内部使用 `useState` 和 `useEffect` 来实现。当 `value` 变化后，等待 `delay` 毫秒再更新返回的 state。
4.  **应用 Hook：**
    *   在 `TodoView.tsx` 中添加一个搜索框。
    *   使用 `useState` 管理搜索框的输入值 `searchTerm`。
    *   使用你的 `useDebounce` Hook 来创建一个 `debouncedSearchTerm`。
    *   `useEffect` 监听 `debouncedSearchTerm` 的变化，当它变化时，在控制台打印一条 "正在搜索..." 的消息，并根据这个值来过滤 `filterTodos()` 的结果。

**目标：** 实践自定义 Hook 的编写，并深入理解泛型在 Hook 中的应用，这是编写可复用、类型安全逻辑的核心。

---

### 第三阶段：Vue + TypeScript 实战进阶 (基于 `12` 到 `13` 模块)

**准备工作：** 将 `13.TS+Vue案例-2/vite-vue3` 项目复制一份到新的练习目录，并 `npm install`。

#### **练习 8：`defineProps` 和 `defineEmits` 的类型艺术**

**任务：** 创建一个 `AlertMessage.vue` 组件。

1.  **Props 定义：**
    *   使用 `<script setup lang="ts">`。
    *   组件接收 `type` prop，值只能是 `"info"`, `"success"`, `"warning"` 之一。
    *   组件接收 `message` prop，类型为 `string`。
2.  **Emits 定义：**
    *   组件有一个关闭按钮，点击时会触发一个 `close` 事件。
    *   使用 `defineEmits` 为 `close` 事件添加类型声明，它不携带任何参数。
3.  **模板与逻辑：**
    *   使用一个 `v-if` 来控制组件的显示和隐藏 (可以通过一个本地的 `ref` state 控制)。
    *   根据 `type` prop 的不同，给告警框添加不同的背景色（简单的 style 绑定即可）。
    *   在父组件 `App.vue` 中使用它，监听 `@close` 事件并在控制台打印消息。

**目标：** 彻底掌握在 Vue `<script setup>` 中为 props 和 emits 提供强类型支持的最佳实践。

#### **练习 9：Template Refs 与组件实例类型**

**任务：** 增强 `CounterComp.vue` 组件。

1.  **暴露方法：** 使用 `defineExpose` 暴露一个 `reset(initialValue: number): void` 方法，该方法可以将 `count` 重置为指定的 `initialValue`。
2.  **获取实例：** 在 `App.vue` 中，我们已经有了 `CounterComp` 的 `ref`。
3.  **添加按钮：** 在 `App.vue` 中添加一个 "重置计数器" 按钮。
4.  **调用方法：** 点击该按钮时，调用 `CounterComp` 实例上的 `reset` 方法，将计数器重置为 100。
5.  **类型安全：** 确保你在 `App.vue` 中定义的 `ref` (比如叫 `counterCompRef`) 拥有正确的组件实例类型，以便在调用 `.value.reset()` 时获得类型提示。课程代码中 `MyComp` 的例子可以给你启发。

**目标：** 掌握如何通过 `defineExpose` 暴露组件 API，以及如何在父组件中安全地获取和调用子组件实例上的方法。

#### **练习 10：组合式函数 (Composable) 的力量**

**任务：** 创建一个 `useFetch.ts` 组合式函数。

1.  **功能：** 封装通用的数据获取逻辑。
2.  **创建 `src/composables/useFetch.ts` 文件。**
3.  **函数定义：**
    *   它应该是一个泛型函数 `useFetch<T>(url: Ref<string> | string)`。
    *   它返回三个 `ref`：`data: Ref<T | null>`，`error: Ref<Error | null>`，和 `isLoading: Ref<boolean>`。
    *   函数内部应该立即开始获取数据 (`isLoading` 设为 `true`)。
    *   使用 `fetch` API，并处理成功和失败的情况，相应地更新 `data` 和 `error` ref。
    *   当 `url` 是一个 `ref` 时，使用 `watchEffect` 来在 `url` 变化时重新获取数据。
4.  **应用 Composable：**
    *   在 `App.vue` 中，使用 `useFetch` 来从一个公共 API (例如 `https://jsonplaceholder.typicode.com/todos/1`) 获取数据。
    *   在模板中根据 `isLoading`, `error`, 和 `data` 的状态显示不同的内容（加载中、错误信息、或获取到的数据）。

**目标：** 实践 Vue3 核心的组合式函数，学习如何封装和复用带有响应式状态的逻辑，并应用泛型来使其更具通用性。

---

完成以上所有练习后，你对 TypeScript 的理解和在主流框架中的应用能力将会有质的飞跃。坚持练习，你会发现 TypeScript 带来的代码健壮性和开发效率提升是无与伦比的。祝你学习愉快！
```
