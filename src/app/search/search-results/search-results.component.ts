import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {}
