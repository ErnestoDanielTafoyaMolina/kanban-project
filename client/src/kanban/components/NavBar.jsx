import { NavLink } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
export const NavBar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="container-fluid">
                <h2>Kanban</h2>
                <NavLink className="navbar-brand" to="/login">
                  <LogoutIcon />
                </NavLink>
            </div>
        </nav>
    </>
  )
}
