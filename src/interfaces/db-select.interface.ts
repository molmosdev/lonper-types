import { IColumn } from './column.interface';
import { IDBSelectFilter } from './db-select-filter.interface';

export interface IDBSelect {
  columnsToSave: IColumn[];
  columnsToShow: IColumn[];
  columnsToSearch: IColumn[];
  filters: IDBSelectFilter[];
  labelText: string;
  noContentText: string;
  searchable: boolean;
  tableName: string;
}
