import { IRoomItem } from './IRoomItem';

export interface IFloorPanel extends IRoomItem {
  subHeading: string;
  superHeading?: string;
  content?: string[];
}
