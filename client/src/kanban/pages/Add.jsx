import { Link } from "react-router-dom"
import { NavBar } from "../components"
import './styles.css'

export const Add = () => {
  return (
    <>
    <NavBar />
    <h2>Añade una tarea</h2>
      <div className="formulario container">
        <div className="card">
          <form action="" className="form">

            <label htmlFor="name" className="form-label">Nombre de la tarea:</label>
            <input type="text" className="form-control" />
            <label htmlFor="name" className="form-label">Descripcion de la tarea:</label>
            <input type="text" className="form-control" />
            <label htmlFor="name" className="form-label">Imagen:</label>
            <input type="file" />
            <Link className="btn form-control btn-success mt-3"
                  to="/dashboard"
            >
                Guardar
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
