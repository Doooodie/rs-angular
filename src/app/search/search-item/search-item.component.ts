import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { faComments, faEye, faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { CounterComponent } from 'app/search/counter/counter.component';
import { StatisticsData } from 'app/search/models/statistics-data.model';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { SearchItem } from 'app/shared/models/search-item.model';

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
    const classList = [faEye, faHeart, faHeartCrack, faComments];
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
