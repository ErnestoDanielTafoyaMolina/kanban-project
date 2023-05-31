import { NavLink } from "react-router-dom"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
export const TaskCard = ({name, img, desc}) => {

  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <img src={img} className="card-img-right" alt="..." />
        <p className="card-text">{ desc }</p>
        <div className="buttons d-flex justify-content-between">
        <NavLink className="btn btn-primary"><EditIcon /></NavLink>
        <button className="btn btn-danger" ><DeleteIcon /></button>
        </div>
      </div> 
    </div>
  )
}
