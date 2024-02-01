import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faComments, faEye, faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { SearchItem } from 'app/shared/models/search-item.model';
import { CounterComponent } from 'app/youtube/components/counter/counter.component';
import { StatisticsData } from 'app/youtube/models/statistics-data.model';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, CounterComponent, NgOptimizedImage, CustomButtonComponent, RouterLink],
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
