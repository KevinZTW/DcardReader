import { fetchCorsData } from "./server/controller.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import express from "express";
const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.static(__dirname + "/client/build"));
app.get("/v1/cors*", fetchCorsData);

app.listen(port, () => {
  console.log("running on port", port);
});
