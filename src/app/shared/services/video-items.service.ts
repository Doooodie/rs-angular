import { Injectable } from '@angular/core';
import { SearchItem } from 'app/search/models/search-item.model';
import { SearchResponse } from 'app/search/models/search-response.model';
import mockedData from 'assets/response.json';

@Injectable({ providedIn: 'root' })
export class VideoItemsService {
  response: SearchResponse = mockedData;
  items: SearchItem[] = [];

  findItems(query: string) {
    if (query) {
      const filtered = this.response.items.filter((item) => {
        return item.snippet.title.toLowerCase().includes(query) && item;
      });

      this.items.push(...filtered);
    } else {
      this.items.splice(0);
    }
  }
}
