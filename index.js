import { fetchData } from "./server/controller.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import express from "express";
const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.static(__dirname + "/app/build"));
app.get("/v1/cors*", async (req, res) => {
  const corsTarget = req.url.replace("/v1/cors", "");
  let data = await fetchData(corsTarget);

  res.status(200).json(data);
});
app.listen(port, () => {
  console.log("running on port", port);
});
