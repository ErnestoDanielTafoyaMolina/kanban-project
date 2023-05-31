import { Navigate, Route, Routes } from "react-router-dom"
import { Login, Register } from "../auth/pages";
import { KanbanLayout } from "../kanban/layout/KanbanLayout";
import { Add } from "../kanban/pages";

const user = {
    isLogin:false
};
export const AppRouter = () => {
  return (
   <Routes>
    {/* Auth */}
    <Route path="login" element={ <Login /> } />
    <Route path="register" element={ <Register /> } />

    {/* Layout */}
    <Route path="dashboard" element={ <KanbanLayout /> } />
    <Route path="add" element={ <Add /> } />
    <Route path="edit" element={ <Add /> } />

    <Route path="/*" element={ 
        user.isLogin
        ? <Navigate to="dashboard"/>
        : <Navigate to="login" />
    } />

   </Routes>
  )
}
