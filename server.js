import express from "express";
import dotenv  from "dotenv";

import userRoutes from './routes/userRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';
import ProductRoutes from './routes/ProductRoutes.js'


dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/products", ProductRoutes);

app.listen(process.env.PORT,() => {
    console.log(`server berjalan di http://localhost:${process.env.PORT}`);
});