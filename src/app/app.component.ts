import { Component, Signal, inject } from "@angular/core";
import { DateComponent, LocationComponent } from "@lab/ui";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [LocationComponent, DateComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    @if(activities(); as activities){
    <section>
      @for(activity of activities; track activity.id){
      <p>
        <span>
          <a href="">{{ activity.name }}</a>
        </span>
        <lab-ui-location [value]="activity.location" />
        <lab-ui-date [value]="activity.date" />
      </p>
      } @empty {
      <li>No activities found</li>
      }
    </section>
    }@else {
    <p>Loading...</p>
    }
  `,
})
export class AppComponent {
  title = "lab-target";
  #service: AppService = inject(AppService);
  activities: Signal<any[]> = this.#service.activities;
}
