import { AiOutlineCloseCircle } from 'react-icons/ai'

import '../styles/Tarea.css'

function Tareas ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? 'tarea-contenedor completada' : 'tarea-contenedor'
      }
    >
      <div className='tarea-texto' onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <AiOutlineCloseCircle
          className='tarea-icono'
          onClick={() => eliminarTarea(id)}
        />
      </div>
    </div>
  )
}
export default Tareas
