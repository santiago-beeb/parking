import express from "express";
import morgan from "morgan";
import cors from "cors";

//Routes
import parkingRoutes from "./routes/parking.routes";

const app = express();

//settings
app.set("port", 8080);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Route
app.use("/api/parking", parkingRoutes);

export { app };
