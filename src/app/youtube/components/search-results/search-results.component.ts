import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { VideoItemsService } from 'app/core/services/video-items.service';
import { SearchItem } from 'app/shared/models/search-item.model';
import { SearchItemComponent } from 'app/youtube/components/search-item/search-item.component';
import { ChangeBorderColorDirective } from 'app/youtube/directives/change-border-color.directive';
import { FilterResultsPipe } from 'app/youtube/pipes/filter-results.pipe';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent, ChangeBorderColorDirective, FilterResultsPipe],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {
  constructor(private videoItemsService: VideoItemsService) {}

  items: SearchItem[] = this.videoItemsService.items;
  searchQuery = computed(() => this.videoItemsService.filterQuery());
}
