import { type FC } from 'react'
import { type Todo as TodoType } from '../types'

type TodoProps = TodoType

const Todo: FC<TodoProps> = ({ id, title, completed }) => {
  return (
    <div>
      <div className="view">
        <input
          className="toggle"
          checked={completed}
          type="checkbox"
          onChange={() => {}}
        />
        <label>{title}</label>
        <button className="destroy" onClick={() => {}}></button>
      </div>
    </div>
  )
}

export default Todo
