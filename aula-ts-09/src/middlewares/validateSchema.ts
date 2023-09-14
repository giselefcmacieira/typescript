import { invalidBodyError } from "../errors/invalidBody";
import { NextFunction, Request, Response } from "express";
import { musicSchema } from "../schemas/musicSchema";


export function validateSchema (req: Request, res: Response, next: NextFunction){
        const validation = musicSchema.validate(req.body, {abortEarly: false});
        if(validation.error){
            const errors = validation.error.details.map(detail => detail.message);
            throw invalidBodyError(errors)
        }
    next();
}