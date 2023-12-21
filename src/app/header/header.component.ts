import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { SettingsOptionsComponent } from './settings-options/settings-options.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    SearchInputComponent,
    ProfileButtonComponent,
    SettingsButtonComponent,
    SettingsOptionsComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
