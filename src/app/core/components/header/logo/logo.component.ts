import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  faYoutube = faYoutube;
}
