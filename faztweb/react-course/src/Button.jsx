import PropTypes from 'prop-types'

export function Button({ text, name}) {

  if(!text) {
    console.error('El texto es requerido')
  }

  return <button>
    {text} - {name}
  </button>

} 

// advertencias por no cumplir con lo requerido
Button.propTypes = {
  text: PropTypes.string.isRequired
}

// valor por defecto
Button.defaultProps = {
  name: 'Some user'
}

