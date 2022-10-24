import './Task.css'

export function TaskCard({ ready }) {
  // estilos en linea

  // const cardStyles = {background: "#202020", color: '#fff', padding: '20px' }
  // const titleStyle = {fontWeight: "bolder"}

  return (
    <div className='card'>
      <h1>Mi primer tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? 'Tarea realizada' : 'Tarea pendiente'}
      </span>
    </div>
  );
}
