export interface IDBSelectFilter {
  columnName: string;
  equal: boolean;
  value: string | null;
  targetFieldId: string | null;
  linked: boolean;
}
