//Vendors
import { NextFunction, request, Request, response, Response } from "express";
//Services
import * as projectService from "./project.service";

export function createHorseHandler(req: Request, res: Response) {
  projectService
    .createHorse(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.status(err.statusCode).send(err));
}
export function createOrderHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  projectService
    .createOrder(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      next(error);
    });
}
export function getUserInfoHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  projectService
    .getUI(Number(req.query.userId))
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      next(error);
    });
}
