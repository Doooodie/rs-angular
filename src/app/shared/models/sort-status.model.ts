export interface SortStatus {
  byDate: 'off' | 'asc' | 'desc';
  byCount: SortStatus['byDate'];
}

export type SortKeys = keyof SortStatus;

export interface SortOption {
  method: SortKeys;
  text: string;
}
