import { Justification } from './Justification.enum';

export interface IRoomItem {
  id: number;
  title: string;
  justification?: Justification;
}
