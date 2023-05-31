import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Dashboard } from "../pages/Dashboard";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './KanbanLayout.css';
export const KanbanLayout = () => {
  return (
    <>
        <NavBar />
        <Link 
          className="btn btn-success"
          to="/add" 
        >
            <AddCircleOutlineIcon />
        </Link>
        <Dashboard />
    </>
  )
}
