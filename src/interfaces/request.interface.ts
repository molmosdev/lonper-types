import { IRequestSummary } from './request-resume.interface';
import { IRequestArticle } from './request-article.interface';
import { RequestType } from '../enums/request-type.enum';
import { IRequestAddress } from './request-address.interface';

export interface IRequest {
  address: IRequestAddress;
  articles: IRequestArticle[];
  clientNumber: number;
  reference: string;
  deliveryDate: Date | undefined;
  number: number | null;
  type: RequestType;
  resume: IRequestSummary;
  active: boolean;
}
