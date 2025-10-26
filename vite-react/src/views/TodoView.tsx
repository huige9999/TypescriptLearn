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