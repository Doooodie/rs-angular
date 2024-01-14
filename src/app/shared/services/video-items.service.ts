import { Injectable, signal } from '@angular/core';
import { SearchItem } from 'app/shared/models/search-item.model';
import { SearchResponse } from 'app/shared/models/search-response.model';
import { SortKeys, SortStatus, SortValues } from 'app/shared/models/sort-status.model';
import mockedData from 'assets/response.json';

@Injectable({ providedIn: 'root' })
export class VideoItemsService {
  private itemsQuery = '';
  private response: SearchResponse = mockedData;
  items: SearchItem[] = [];
  sortStatus = signal<SortStatus>({
    byDate: SortValues.off,
    byCount: SortValues.off,
  });

  private clearItems() {
    return this.items.splice(0);
  }

  private setSortStatus(sortBy: SortKeys) {
    if (this.sortStatus()[sortBy] === SortValues.off) {
      this.sortStatus.set({ ...this.sortStatus(), [sortBy]: SortValues.asc });
    } else if (this.sortStatus()[sortBy] === SortValues.asc) {
      this.sortStatus.set({ ...this.sortStatus(), [sortBy]: SortValues.desc });
    } else if (this.sortStatus()[sortBy] === SortValues.desc) {
      this.sortStatus.set({ ...this.sortStatus(), [sortBy]: SortValues.off });
    }

    if (sortBy === 'byDate') {
      this.sortStatus.set({ ...this.sortStatus(), byCount: SortValues.off });
    } else {
      this.sortStatus.set({ ...this.sortStatus(), byDate: SortValues.off });
    }
  }

  findItems(query: string) {
    this.itemsQuery = query;
    this.sortStatus.set({ byDate: SortValues.off, byCount: SortValues.off });
    this.clearItems();

    if (query) {
      const filtered = this.response.items.filter((item) => {
        return item.snippet.title.toLowerCase().includes(query) && item;
      });

      this.items.push(...filtered);
    }
  }

  sortItems(sortBy: SortKeys) {
    this.setSortStatus(sortBy);

    if (this.sortStatus()[sortBy] === SortValues.off) {
      this.clearItems();
      this.findItems(this.itemsQuery);
    } else {
      const itemsCopy = this.clearItems();

      itemsCopy.sort((firstItem, secondItem) => {
        let result = 0;

        if (sortBy === 'byDate') {
          const firstItemDate = Date.parse(firstItem.snippet.publishedAt);
          const secondItemDate = Date.parse(secondItem.snippet.publishedAt);

          if (this.sortStatus().byDate === SortValues.asc) {
            result = firstItemDate - secondItemDate;
          } else if (this.sortStatus().byDate === SortValues.desc) {
            result = secondItemDate - firstItemDate;
          }
        }

        if (sortBy === 'byCount') {
          const firstItemCount = +firstItem.statistics.viewCount;
          const secondItemCount = +secondItem.statistics.viewCount;

          if (this.sortStatus().byCount === SortValues.asc) {
            result = firstItemCount - secondItemCount;
          } else if (this.sortStatus().byCount === SortValues.desc) {
            result = secondItemCount - firstItemCount;
          }
        }

        return result;
      });

      this.items.push(...itemsCopy);
    }
  }
}
