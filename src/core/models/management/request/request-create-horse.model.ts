import { Sex } from "../../../enums";

export interface RequestCreateHorseModel {
  name: string;
  dateOfBirth: string;
  sex: Sex;
  isFemale: boolean;
  pregnant: boolean;
  dueDate: string;
}
