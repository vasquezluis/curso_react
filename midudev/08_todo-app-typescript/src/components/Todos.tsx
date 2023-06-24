import { type ListOfTodos } from '../types'
import Todo from './Todo'

interface TodosProps {
  todos: ListOfTodos
}

const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li className={`${todo.completed ? 'completed' : ''}`} key={todo.id}>
          <Todo id={todo.id} title={todo.title} completed={todo.completed} />
        </li>
      ))}
    </ul>
  )
}

export default Todos
