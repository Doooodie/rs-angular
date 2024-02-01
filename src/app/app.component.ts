import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './core/pages/header/header.component';
import { YoutubeComponent } from './youtube/pages/youtube/youtube.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, YoutubeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(faConfig: FaConfig) {
    faConfig.fixedWidth = true;
  }
}
