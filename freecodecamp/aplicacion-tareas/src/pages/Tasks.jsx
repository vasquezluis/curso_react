import { useContext } from 'react'
import '../App.css'
import ListaDeTareas from '../components/ListaDeTareas'
import Logo from '../components/Logo'
import AccountContext from '../context/AccountConext'

const Tasks = () => {
  const context = useContext(AccountContext)

  const { getSession, logout } = context

  const logOut = () => {
    logout()
      .then(data => {
        console.log('Logged out!', data)
      })
      .catch(err => {
        console.log('Failed to logout!', err.message)
      })
  }

  return (
    <div className='aplicacion-tareas'>
      <div>
        <Logo />
        <button onClick={logOut}>Logout</button>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tarea</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default Tasks
