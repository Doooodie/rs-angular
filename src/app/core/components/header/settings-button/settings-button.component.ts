import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './settings-button.component.html',
})
export class SettingsButtonComponent {
  faSliders = faSliders;
}
