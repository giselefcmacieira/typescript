import express, { json } from "express";
import musicRouter from "./routers/music-router";
import errorHandler from "./middlewares/error-middlewares";

const app = express();

app.use(json());
app.use(musicRouter);

app.use(errorHandler);

app.listen(5000, () => {
  console.log(`Server is up and running on port 5000`);
})
