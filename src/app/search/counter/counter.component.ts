import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatisticsData } from 'app/search/models/statistics-data.model';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  @Input() statistics: StatisticsData = {} as StatisticsData;
}
