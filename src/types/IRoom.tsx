export interface IRoom<T> {
  title: string;
  startPosition: number;
  endPosition: number;
  roomItems: T[];
}
