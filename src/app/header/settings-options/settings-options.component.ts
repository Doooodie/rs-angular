import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortButtonComponent } from 'app/header/sort-button/sort-button.component';
import { SortOption } from 'app/shared/models/sort-status.model';

@Component({
  selector: 'app-settings-options',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SortButtonComponent],
  templateUrl: './settings-options.component.html',
})
export class SettingsOptionsComponent {
  sortOptions: SortOption[] = [
    { method: 'byDate', text: 'date' },
    { method: 'byCount', text: 'count of views' },
  ];
}
