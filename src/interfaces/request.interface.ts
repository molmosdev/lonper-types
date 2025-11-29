import { IRequestSummary } from "./request-resume.interface";
import { IRequestArticle } from "./request-article.interface";
import { RequestType } from "../enums/request-type.enum";
import { IRequestAddress } from "./request-address.interface";

export interface IRequest {
  id?: string;
  address: IRequestAddress;
  articles: IRequestArticle[];
  clientName: string;
  clientNumber: number;
  reference: string;
  deliveryDate: Date | null;
  number: number | null;
  type: RequestType;
  resume: IRequestSummary;
  active: boolean;
}
