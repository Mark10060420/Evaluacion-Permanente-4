import express from "express";
import morgan from "morgan"
import product from "./routes/producto.routes";
import client from "./routes/cliente.routes";
import order from "./routes/orden.routes";
import category from "./routes/categoria.routes";
import cors from "cors";

const app = express();

//Settings
app.set("port",4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Routes
app.use(product);
app.use(client);
app.use(order);
app.use(category);

export default app;
