import { IFieldSubconfig } from './field-subconfig.interface';

export interface IFieldConfig {
  id: string;
  fieldId: string;
  fieldsSubconfigs: IFieldSubconfig[];
}
