import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchema } from "../middlewares/validateSchema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema, musicController.createMusic); // TODO: validação via Joi

export default musicRouter;