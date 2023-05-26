import { Route, Routes } from "react-router-dom"
import { Login, Register } from "../auth/pages"
import { KanbanApp, CreateTask } from "../kanban/pages"

export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<KanbanApp/>} />
        <Route path="/create" element={<CreateTask/>} />

    </Routes>
  )
}
