import { Sex } from '../../../enums';
import { BaseResponseModel } from '../../base-response.model';

export interface ResponseSearchHorsesModel extends BaseResponseModel {
  items: Array<ResponseSearchHorsesModelItem>;
  total: number;
  maxPages: number;
}

export interface ResponseSearchHorsesModelItem {
  id: string;
  name: string;
  dateOfBirth: string;
  sex: Sex;
  isFemale: boolean;
  pregnant: boolean | null;
  dueDate: string | null;
}
