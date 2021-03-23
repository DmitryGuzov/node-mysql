import { Sex } from '../../../enums';
import { BaseResponseModel } from '../../base-response.model';

export interface ResponseCreatedModel extends BaseResponseModel {
    id: string;
    name: string;
    dateOfBirth: string;
    sex: Sex;
    isFemale: boolean;
    pregnant: boolean;
    dueDate: string;
} 
