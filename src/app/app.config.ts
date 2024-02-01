import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AuthComponent } from './auth/pages/auth.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { DetailedInformationComponent } from './youtube/pages/detailed-information/detailed-information.component';
import { YoutubeComponent } from './youtube/pages/youtube/youtube.component';

const routes: Routes = [
  { path: '', component: YoutubeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'details', component: DetailedInformationComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
