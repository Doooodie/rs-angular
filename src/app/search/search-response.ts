import { SearchItem } from './search-item';

export interface SearchResponse {
  TODO: string;
  kind: 'youtube#videoListResponse';
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem[];
}
