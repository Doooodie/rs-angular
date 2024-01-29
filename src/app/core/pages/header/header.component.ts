import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from 'app/core/components/header/logo/logo.component';
import { ProfileButtonComponent } from 'app/core/components/header/profile-button/profile-button.component';
import { SearchInputComponent } from 'app/core/components/header/search-input/search-input.component';
import { SettingsButtonComponent } from 'app/core/components/header/settings-button/settings-button.component';
import { SettingsOptionsComponent } from 'app/core/components/header/settings-options/settings-options.component';

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
export class HeaderComponent {
  showFilters = false;

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
