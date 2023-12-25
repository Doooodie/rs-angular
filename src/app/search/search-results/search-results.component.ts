import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchResponse } from '../search-response.model';
import response from '../../../assets/response.json';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  results: SearchResponse['items'] = [];

  ngOnInit() {
    const { items } = response;
    this.results = items;
  }
}
