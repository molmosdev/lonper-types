import { ILinkedActive } from "./linked-active.interface";
import { IPopup } from "./popup.interface";
import { IDBSelect } from "./db-select.interface";
import { Size } from "../enums/size.enum";
import { ISelectOption } from "./select-option.interface";

export interface IFieldSubconfig {
  id: string;
  fieldConfigId: string;
  showName: boolean;
  type: string;
  value: any | null;
  dataUnit: string | null;
  size: Size;
  hoverText: string;
  dbSelect: IDBSelect | null;
  select: ISelectOption[] | null;
  linkedActive: ILinkedActive[] | null;
  linkedSameDefaultUntouched: string | null;
  linkedSameOnValidate: string | null;
  popup: IPopup | null;
  required: boolean;
}
