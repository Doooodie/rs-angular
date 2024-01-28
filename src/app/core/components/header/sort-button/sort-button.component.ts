import { CommonModule } from '@angular/common';
import { Component, computed, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { VideoItemsService } from 'app/core/services/video-items.service';
import { SortKeys, SortValues } from 'app/shared/models/sort-status.model';

@Component({
  selector: 'app-sort-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sort-button.component.html',
})
export class SortButtonComponent {
  constructor(private videoItemsService: VideoItemsService) {}

  @Input() sortKey: SortKeys = 'byCount';
  faSort = computed(() => {
    const sortStatus = this.videoItemsService.sortStatus()[this.sortKey];

    if (sortStatus === SortValues.desc) {
      return faSortDown;
    } else if (sortStatus === SortValues.asc) {
      return faSortUp;
    }

    return faSort;
  });

  sort() {
    this.videoItemsService.sortItems(this.sortKey);
  }
}
