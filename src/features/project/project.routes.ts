//Vendors
import { Router } from "express";
//Constants
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
//Controllers
import * as ProjectController from "./project.controller";

export const projectRouter: Router = Router();

projectRouter.post(
  ApiEndpointsConstants.PROJECT_CREATE,
  ProjectController.createHorseHandler
);
projectRouter.post(
  ApiEndpointsConstants.PROJECT_CREATE_ORDER,
  ProjectController.createOrderHandler
);
projectRouter.get(
  ApiEndpointsConstants.PROJECT_USER,
  ProjectController.getUserInfoHandler
);
