import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { LocationComponent } from "lab-ui";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [LocationComponent, AsyncPipe, JsonPipe],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <lab-ui-location value="Mars" />
    <pre>{{ activities$ | async | json }}</pre>
  `,
})
export class AppComponent {
  title = "lab-target";
  #service: AppService = inject(AppService);
  activities$ = this.#service.getActivities$();
}
