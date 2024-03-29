import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SearchResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(faConfig: FaConfig) {
    faConfig.fixedWidth = true;
  }
}
