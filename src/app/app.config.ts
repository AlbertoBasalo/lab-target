import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { metricsInterceptor } from "@lab/core";
import { provideCrudRepository } from "@lab/srv";
import { environment } from "../environments/environment";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([metricsInterceptor])),
    provideCrudRepository(environment.apiUrl),
  ],
};
