import { NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">
                  Kanban
                </NavLink>
            </div>
        </nav>
    </>
  )
}
