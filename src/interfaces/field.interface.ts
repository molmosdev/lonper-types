import { IFieldConfig } from './field-config.interface';

export interface IField {
  id: string;
  order: number;
  groupId: string;
  name: string;
  description: string | null;
  saveOnRequest: boolean;
  fieldsConfigs: IFieldConfig[];
}
