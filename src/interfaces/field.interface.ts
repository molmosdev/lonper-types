import { DelfosType } from "../types/delfos-type.type";
import { IFieldConfig } from "./field-config.interface";

export interface IField {
  id: string;
  order: number;
  groupId: string;
  name: string;
  description: string | null;
  saveOnRequest: boolean;
  fieldsConfigs: IFieldConfig[];
  delfosId: string;
  delfosType: DelfosType;
}
