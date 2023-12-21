import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, SearchInputComponent, ProfileComponent, SettingsComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
