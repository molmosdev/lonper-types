import { DelfosType } from "../types/delfos-type.type";
import { IAwningFieldRule } from "./awning-field-rule.interface";

export interface IAwningField {
  id: string;
  order: number;
  groupId: string;
  name: string;
  description: string | null;
  saveOnRequest: boolean;
  awningFieldRules: IAwningFieldRule[];
  delfosId?: string | null;
  delfosType?: DelfosType | null;
}
