export interface IDelfosOrderArticle {
  id: string;
  rateBeforeDiscount: number;
  units: number;
  dto1: number;
  dto2: number;
  dto3: number;
  total: number;
  config?: Record<string, string | number | boolean>;
}
