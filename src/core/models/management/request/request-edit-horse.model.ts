import { Sex } from "../../../enums";

export interface RequestUpdateHorsesModel {
  name: string;
  dateOfBirth: string;
  sex: Sex;
  isFemale: boolean;
  pregnant: boolean;
  dueDate: string;
}
