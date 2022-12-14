import freeCodeCampLogo from "../images/freecodecamp-logo.png";
import '../styles/Logo.css'

function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="logo de freecodecamp"
        />
      </div>
  )
}

export default Logo