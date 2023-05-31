import { NavBar } from "../components/NavBar"
import { Dashboard } from "../pages/Dashboard"

export const KanbanLayout = () => {
  return (
    <>
        <header>
          <NavBar />
        </header>
        <Dashboard />
    </>
  )
}
