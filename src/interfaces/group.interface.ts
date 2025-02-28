import { IField } from './field.interface';

export interface IGroup {
  id: string;
  name: string;
  order: number;
  fields: IField[];
}
