import { RequestType } from "../enums/request-type.enum";
import { RequestArticleType } from "../enums/request-article-type.enum";

export interface IRequestArticle {
  id: string;
  awningId?: string;
  articleId?: string;
  relatedAwningArticleId?: string;
  relatedFieldId?: string;
  supplierDescription?: string;
  order?: number;
  created: Date;
  name: string;
  type: RequestArticleType;
  rateBeforeDiscount: number;
  units: number;
  dto1: number;
  dto2: number;
  dto3: number;
  total: number;
  state: RequestType;
  config?: any;
}
