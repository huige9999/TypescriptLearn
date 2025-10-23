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