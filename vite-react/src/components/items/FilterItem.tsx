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
        filters.map(filter => <button onClick={() => { handleFilter(filter) }} key={filter}>{ filter }</button> )
      }
    </div>
  )
}

export default FilterItem