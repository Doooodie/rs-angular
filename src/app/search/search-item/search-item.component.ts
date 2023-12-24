import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { SearchItem, StatisticsData } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './search-item.component.html',
})
export class SearchItemComponent implements OnInit {
  @Input() item: SearchItem = {} as SearchItem;
  statsArr: StatisticsData[] = [];

  ngOnInit() {
    const classList = ['fa-eye', 'fa-heart', 'fa-heart-crack', 'fa-comments'];
    const statsWithoutFavorites: Partial<SearchItem['statistics']> = { ...this.item.statistics };
    delete statsWithoutFavorites.favoriteCount;

    this.statsArr = Object.entries(statsWithoutFavorites).map(([key, value], index) => {
      return {
        name: key,
        value,
        className: classList[index],
      };
    });
  }

  trackByItem(index: number, item: StatisticsData) {
    return +item.name;
  }
}
