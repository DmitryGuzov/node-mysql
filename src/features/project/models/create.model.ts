import { Sex } from "../../../core/enums";

export interface CreateHorseModel {
    id: string;
    name: string;
    dateOfBirth: string;
    sex: Sex;
    isFemale: boolean;
    pregnant: boolean | null;
    dueDate: string | null;
  }