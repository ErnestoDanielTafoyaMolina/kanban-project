import { TaskCard } from "../components/TaskCard";
import "./styles.css";
const taskInfo={
    name:"Comprar queso",
    desc:"Ir a la tienda a comprar queso",
    stat:"to-do",
    img:"https://res.cloudinary.com/dh07c38b0/image/upload/v1670205357/wolves-products/ylvqfhgahh9pwb5y5pmq.png"
}
export const Dashboard = () => {
  const { name, desc, stat, img } = taskInfo;
  console.log(name, desc, stat, img);
  return (
    <>
      <h2>Bienvenido a tu kanban</h2>
      <div className="container">

        <div className="to-do">
        <h2 className="card-title"> To do</h2>
          <div className="card-body">
          <TaskCard 
            name={name}
            desc={desc}
            img={img}
            />

            <TaskCard 
            name={name}
            desc={desc}
            img={img}
            />
            <TaskCard 
            name={name}
            desc={desc}
            img={img}
            />
          </div>
        </div>
        <div className="doing">
        <h2 className="card-title">Doing</h2>
        <div className="card-body">
          <TaskCard 
            name={name}
            desc={desc}
            img={img}
            />
            
          </div>
        </div>
        <div className="done">
          <h2 className="card-title">Done</h2>
        <div className="card-body">
          <TaskCard 
            name={name}
            desc={desc}
            img={img}
            />
            
          </div>
        </div>
      </div>
    </>
  )
}
