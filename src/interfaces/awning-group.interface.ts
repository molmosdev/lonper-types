import { IAwningField } from "./awning-field.interface";

export interface IAwningGroup {
  id: string;
  name: string;
  order: number;
  awningFields: IAwningField[];
}
