import { Sex } from '../../../enums';
import { BaseResponseModel } from '../../base-response.model';

export interface ResponseMonitoringModel extends BaseResponseModel {
  id: string;
  name: string;
  dateOfBirth: string;
  sex: Sex;
  isFemale: boolean;
  pregnant: boolean;
  dueDate: string;
  pulse: number;
}
