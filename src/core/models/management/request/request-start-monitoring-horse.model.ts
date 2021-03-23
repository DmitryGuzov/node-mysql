import { Sex } from "../../../enums";

export interface RequestStartMonitoringHorseModel {
  name: string;
  dateOfBirth: string;
  sex: Sex;
  isFemale: boolean;
  pregnant: boolean;
  dueDate: string;
}
