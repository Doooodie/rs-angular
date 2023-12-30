import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeBorderColorDirective } from 'app/search/directives/change-border-color.directive';
import { SearchResponse } from 'app/search/models/search-response.model';
import { SearchItemComponent } from 'app/search/search-item/search-item.component';
import response from 'assets/response.json';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent, ChangeBorderColorDirective],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  results: SearchResponse['items'] = [];

  ngOnInit() {
    const { items } = response;
    this.results = items;
  }
}
