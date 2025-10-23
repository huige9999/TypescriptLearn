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