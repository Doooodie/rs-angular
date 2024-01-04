import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatisticsData } from 'app/shared/models/search-item.model';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  @Input() statistics: StatisticsData = {} as StatisticsData;
}
