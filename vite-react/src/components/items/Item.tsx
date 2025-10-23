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