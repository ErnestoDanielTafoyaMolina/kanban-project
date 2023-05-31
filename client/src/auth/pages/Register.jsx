import { Link } from 'react-router-dom';
import './css/LoginRegister.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = () => {
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
              <h3>Registrar cuenta</h3>
              
              <label>Usuario: </label>
              <br />
              <input placeholder="UsuarioEjemplo123" type="text" className="form-control"/>
              <br />
              
              <label>Correo electrónico: </label>
              <br />
              <input placeholder="correoejemplo@ejemplo.com" type="email" className="form-control"/>
              <br />

              <label>Contraseña: </label>
              <br />
              <input placeholder="••••••••••••" type="password" className="form-control"/>
              <br />
              <Link className="BtnCrearCuenta"
                to="/dashboard"
              >Crear cuenta</Link>

              <br />
              <br />

              {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="enlace-boton">¿Ya tienes una cuenta? <br />
              Inicia sesión aquí</a> */}
              <Link
              to="/login"
              >
                ¿Ya tienes una cuenta? <br />
              Inicia sesión aquí
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
