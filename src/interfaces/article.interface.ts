export interface IArticle {
  id: string;
  article: string;
  name: string;
  familyCode: string;
  familyDesc: string;
  subfamilyCode: string;
  subfamilyDesc: string;
  blqC: number;
  blqV: number;
  type: string;
  subtype: string;
  shortName: string | null;
  blqVName: string | null;
  lonRate: string;
  lonGroup: string;
  lonEdging: string;
  salePriceBeforeDiscount?: number;
  salePrice: number;
  unsubscribed: number;
  crtlStk: number;
  dto1: number;
  dto2: number;
  dto3: number;
}
