import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './profile-button.component.html',
})
export class ProfileButtonComponent {
  faUser = faUser;
}
