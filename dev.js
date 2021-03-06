import app from "./api/index.js";
import consola from "consola";
import dotenv from "dotenv";

dotenv.config();

app.listen(9001, () => consola.info("Server started at localhost:9001"));
