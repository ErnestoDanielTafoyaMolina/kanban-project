import { Link } from 'react-router-dom';
import './css/LoginRegister.css';
import "bootstrap/dist/css/bootstrap.min.css";
export const Login = () => {
  return (
    <>
    <div className="containerGeneral">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="containerPrincipal">
          <div className='containerSecundario'>
            <div className='form-group'>
              <h1>Bienvenido a Kanban</h1>
              <h3>Inicio de Sesión</h3>
              <label>Correo electrónico: </label>
              <br />
              <input placeholder="correoejemplo@ejemplo.com" type="email" className="form-control"/>
              <br />

              <label>Contraseña: </label>
              <br />
              <input placeholder="••••••••••••" type="password" className="form-control"/>
              <br />
              <Link 
                className="btnLogin"
                to="/dashboard"
                >Iniciar sesión</Link>
              <br />
              <br />

              {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="enlace-boton">¿Aún no tienes cuenta? <br />
              Registrate aqui</a> */}
              <Link
                to='/register'
              >
              ¿Aún no tienes cuenta? <br />
              Registrate aqui
              </Link>
              </div>
            </div>
          </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    
        
    </div>
    </>
  )
}
