export enum SortValues {
  off = 'off',
  asc = 'asc',
  desc = 'desc',
}

export interface SortStatus {
  byDate: SortValues;
  byCount: SortStatus['byDate'];
}

export type SortKeys = keyof SortStatus;

export interface SortOption {
  method: SortKeys;
  text: string;
}
