import { List } from '../enums/list.enum';
import { RequestType } from '../enums/request-type.enum';

export interface INewRequestState {
  listType: List;
  requestType: RequestType;
}
