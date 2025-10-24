import AddItem from "../components/items/AddItem"
import FilterItem from "../components/items/FilterItem"
import ItemList from "../components/items/ItemList"
import StatusIndicator from "../components/StatusIndicator"
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
      <StatusIndicator status="error"></StatusIndicator>
    </>
  )
}

export default TodoView