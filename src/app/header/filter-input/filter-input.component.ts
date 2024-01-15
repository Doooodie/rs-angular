import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoItemsService } from 'app/shared/services/video-items.service';

@Component({
  selector: 'app-filter-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-input.component.html',
})
export class FilterInputComponent {
  constructor(private videoItemsService: VideoItemsService) {}

  query = this.videoItemsService.filterQuery();

  changeQuery(event: Event) {
    const target = event.target as HTMLInputElement;
    this.query = target.value;
  }

  updateQuery() {
    this.videoItemsService.filterQuery.set(this.query);
  }
}
