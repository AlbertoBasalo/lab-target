import { Component, Signal, inject } from "@angular/core";
import { DateComponent, LocationComponent } from "@lab/ui";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [LocationComponent, DateComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <section>
      @if(activities(); as activities){
      <ul>
        @for(activity of activities; track activity.id){
        <li>
          <span>
            <a href="">{{ activity.name }}</a>
          </span>
          <lab-ui-location [value]="activity.location" />
          <lab-ui-date [value]="activity.date" />
        </li>
        } @empty {
        <li>No activities found</li>
        }
      </ul>
      }@else {
      <p>Loading...</p>
      }
    </section>
  `,
})
export class AppComponent {
  title = "lab-target";
  #service: AppService = inject(AppService);
  activities: Signal<any[]> = this.#service.activities;
}
