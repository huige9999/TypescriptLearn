export interface Todo { 
  id: number
  text: string
  done: boolean
}

export type Filters = ["全部", "未完成", "已完成"];