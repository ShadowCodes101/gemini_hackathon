import express from "express";
import cors from "cors";



const app = express();
app.use(cors())
app.use(express.json())


import testRoutes from "./routes/tests.routes.js";
app.use("/api/v1/test",testRoutes)
export default app;