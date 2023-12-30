import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeBorderColorDirective } from 'app/search/directives/change-border-color.directive';
import { SearchItem } from 'app/search/models/search-item.model';
import { SearchItemComponent } from 'app/search/search-item/search-item.component';
import { VideoItemsService } from 'app/shared/services/video-items.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent, ChangeBorderColorDirective],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {
  constructor(private videoItemsService: VideoItemsService) {}

  items: SearchItem[] = this.videoItemsService.items;
}
