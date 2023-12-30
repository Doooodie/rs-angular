import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { VideoItemsService } from 'app/shared/services/video-items.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  constructor(private videoItemsService: VideoItemsService) {}

  query = '';

  changeQuery(event: Event) {
    const target = event.target as HTMLInputElement;
    this.query = target.value;
  }

  updateItems() {
    this.videoItemsService.findItems(this.query);
  }
}
