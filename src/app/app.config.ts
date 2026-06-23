import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes,withViewTransitions()),
  provideClientHydration(withEventReplay()),
  provideHttpClient(withFetch()),
  importProvidersFrom(NgxPaginationModule),
  provideToastr() // Toastr providers
]
};
