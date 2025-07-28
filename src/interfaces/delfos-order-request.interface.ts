import { IRequestSummary } from "./request-resume.interface";
import { IDelfosOrderArticle } from "./delfos-order-article.interface";

export interface IDelfosOrderRequest {
  id: string;
  reference: string;
  deliveryDate: Date | undefined;
  client: number;
  address: number;
  articles: IDelfosOrderArticle[];
  resume: IRequestSummary;
}
