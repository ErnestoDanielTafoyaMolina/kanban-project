//dependences
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";

//import routes

import TasksRoutes from "./routes/tasks.routes";

//init app
const app = express();
app.set("port",config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//use routes

app.use("/api",TasksRoutes);

export default app;