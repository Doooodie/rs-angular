import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoItemsService } from 'app/shared/services/video-items.service';

@Component({
  selector: 'app-settings-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-options.component.html',
})
export class SettingsOptionsComponent {
  constructor(private videoItemsService: VideoItemsService) {}

  sortByDate() {
    this.videoItemsService.sortItems('byDate');
  }

  sortByCount() {
    this.videoItemsService.sortItems('byCount');
  }
}
