import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { SortKeys } from 'app/shared/models/sort-status.model';
import { VideoItemsService } from 'app/shared/services/video-items.service';

@Component({
  selector: 'app-sort-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sort-button.component.html',
})
export class SortButtonComponent {
  constructor(private videoItemsService: VideoItemsService) {}

  faSort = faSort;
  @Input() sortKey: SortKeys = 'byCount';

  sort(sortBy: SortKeys) {
    this.videoItemsService.sortItems(sortBy);

    if (this.videoItemsService.sortStatus[sortBy] === 'desc') {
      this.faSort = faSortDown;
    } else if (this.videoItemsService.sortStatus[sortBy] === 'asc') {
      this.faSort = faSortUp;
    } else if (this.videoItemsService.sortStatus[sortBy] === 'off') {
      this.faSort = faSort;
    }
  }
}
