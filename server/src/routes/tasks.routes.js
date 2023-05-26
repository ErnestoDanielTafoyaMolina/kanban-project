import { Router } from "express";
import { getAllTasks } from "../controllers/tasks.controllers";

const router = Router();

router.get("/tasks/:id", getAllTasks);

export default router;

