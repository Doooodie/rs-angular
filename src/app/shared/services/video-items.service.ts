import { Injectable } from '@angular/core';
import { SearchItem } from 'app/shared/models/search-item.model';
import { SearchResponse } from 'app/shared/models/search-response.model';
import { SortKeys, SortStatus } from 'app/shared/models/sort-status.model';
import mockedData from 'assets/response.json';

@Injectable({ providedIn: 'root' })
export class VideoItemsService {
  response: SearchResponse = mockedData;
  items: SearchItem[] = [];
  itemsQuery = '';
  sortStatus: SortStatus = {
    byDate: 'off',
    byCount: 'off',
  };

  clearItems() {
    return this.items.splice(0);
  }

  findItems(query: string) {
    this.itemsQuery = query;

    if (query) {
      const filtered = this.response.items.filter((item) => {
        return item.snippet.title.toLowerCase().includes(query) && item;
      });

      this.items.push(...filtered);
    } else {
      this.clearItems();
    }
  }

  sortItems(sortBy: SortKeys) {
    if (this.sortStatus[sortBy] === 'off') {
      this.sortStatus[sortBy] = 'asc';
    } else if (this.sortStatus[sortBy] === 'asc') {
      this.sortStatus[sortBy] = 'desc';
    } else if (this.sortStatus[sortBy] === 'desc') {
      this.sortStatus[sortBy] = 'off';
    }

    if (sortBy === 'byDate') {
      this.sortStatus.byCount = 'off';
    } else {
      this.sortStatus.byDate = 'off';
    }

    if (this.sortStatus[sortBy] === 'off') {
      this.clearItems();
      this.findItems(this.itemsQuery);
    } else {
      const itemsCopy = this.clearItems();

      itemsCopy.sort((firstItem, secondItem) => {
        let result = 0;

        if (sortBy === 'byDate') {
          const firstItemDate = Date.parse(firstItem.snippet.publishedAt);
          const secondItemDate = Date.parse(secondItem.snippet.publishedAt);

          if (this.sortStatus.byDate === 'asc') {
            result = firstItemDate - secondItemDate;
          } else if (this.sortStatus.byDate === 'desc') {
            result = secondItemDate - firstItemDate;
          }
        }

        if (sortBy === 'byCount') {
          const firstItemCount = +firstItem.statistics.viewCount;
          const secondItemCount = +secondItem.statistics.viewCount;

          if (this.sortStatus.byCount === 'asc') {
            result = firstItemCount - secondItemCount;
          } else if (this.sortStatus.byCount === 'desc') {
            result = secondItemCount - firstItemCount;
          }
        }

        return result;
      });

      this.items.push(...itemsCopy);
    }
  }
}
