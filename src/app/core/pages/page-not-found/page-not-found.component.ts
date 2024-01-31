import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {
  faFaceSadTear = faFaceSadTear;
}
