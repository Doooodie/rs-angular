import { Injectable } from '@angular/core';
import { SearchItem } from 'app/shared/models/search-item.model';
import { SearchResponse } from 'app/shared/models/search-response.model';
import mockedData from 'assets/response.json';

@Injectable({ providedIn: 'root' })
export class VideoItemsService {
  response: SearchResponse = mockedData;
  items: SearchItem[] = [];
  sortStatus = {
    byDate: false,
    byCount: false,
  };

  clearItems() {
    return this.items.splice(0);
  }

  findItems(query: string) {
    if (query) {
      const filtered = this.response.items.filter((item) => {
        return item.snippet.title.toLowerCase().includes(query) && item;
      });

      this.items.push(...filtered);
    } else {
      this.clearItems();
    }
  }

  sortItems(sortBy: keyof typeof this.sortStatus) {
    const itemsCopy = this.clearItems();

    itemsCopy.sort((firstItem, secondItem) => {
      let result = 0;

      if (sortBy === 'byDate') {
        const firstItemDate = Date.parse(firstItem.snippet.publishedAt);
        const secondItemDate = Date.parse(secondItem.snippet.publishedAt);

        if (this.sortStatus.byDate) {
          result = firstItemDate - secondItemDate;
        } else {
          result = secondItemDate - firstItemDate;
        }
      }

      if (sortBy === 'byCount') {
        const firstItemCount = +firstItem.statistics.viewCount;
        const secondItemCount = +secondItem.statistics.viewCount;

        if (this.sortStatus.byCount) {
          result = firstItemCount - secondItemCount;
        } else {
          result = secondItemCount - firstItemCount;
        }
      }

      return result;
    });

    if (sortBy === 'byDate') {
      this.sortStatus.byDate = !this.sortStatus.byDate;
      this.sortStatus.byCount = false;
    }

    if (sortBy === 'byCount') {
      this.sortStatus.byCount = !this.sortStatus.byCount;
      this.sortStatus.byDate = false;
    }

    this.items.push(...itemsCopy);
  }
}
