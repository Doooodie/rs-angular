import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CounterComponent } from 'app/search/counter/counter.component';
import { SearchItem, StatisticsData } from 'app/search/models/search-item.model';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, CounterComponent, NgOptimizedImage, CustomButtonComponent],
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
}
