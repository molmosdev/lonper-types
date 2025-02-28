export interface IRequestSummary {
  totalImport: number | string;
  percentageMargin: number | string;
  margin?: number | string;
  installation: number | string;
  shipping: number | string;
  salesBudget: number | string;
  salesBudgedPlusTaxes?: number | string;
  observations: number | string;
}
