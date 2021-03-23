//Helpers
//Repositories
import * as projectRepository from "./project.repository";
import { v4 as uuidv4 } from "uuid";
//Models
import {
  RequestCreateHorseModel,
  RequestSearchHorseModel,
  RequestUpdateHorsesModel,
  ResponseSearchHorsesModel,
} from "../../core/models/management";

import { ResponseDeletedModel } from "../../core/models/management/response/response-deleted.model";
import { ResponseUpdatedModel } from "../../core/models/management/response/response-updated.model";
import { ResponseGetModel } from "../../core/models/management/response/response-get-horse.model";
import { HorseModel } from "./models/horse.model";
import { ResponseCreatedModel } from "../../core/models/management/response/response-created.model";

export async function createHorse({ name, age }: any): Promise<any> {
  console.log(name, age);
  let payload = {
    name: name,
    age: age,
  };
  let created = await projectRepository.create(payload);
  if (!created) {
    throw { statusCode: 400, message: "Error in creating :(" };
  } else {
    return {
      isSuccessful: true,
      message: `${name} created success`,
      ...created,
    };
  }
}
export async function createOrder({ userId, orderName }: any): Promise<any> {
  console.log(userId, orderName);
  let payload = {
    userId: userId,
    orderName: orderName,
  };
  let created = await projectRepository.createOrder(payload);
  if (!created) {
    throw { statusCode: 400, message: "Error in creating :(" };
  } else {
    return {
      isSuccessful: true,
      message: `${orderName} created success`,
      ...created,
    };
  }
}
export async function getUI(userId: number) {
  let created = await projectRepository.getUserInfo(userId);
  return { created };
}
