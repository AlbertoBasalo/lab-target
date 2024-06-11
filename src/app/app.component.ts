import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { LocationComponent } from "@lab/ui";
import { Observable } from "rxjs";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [LocationComponent, AsyncPipe],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <section>
      <!-- @let activities = activities$ | async; -->
      @if( activities$ | async; as activities){
      <ul>
        @for(activity of activities; track activity){
        <li>
          <span>
            <a href="">{{ activity.name }}</a>
          </span>
          <lab-ui-location [value]="activity.location" />
        </li>
        }
      </ul>
      }
    </section>
  `,
})
export class AppComponent {
  title = "lab-target";
  #service: AppService = inject(AppService);
  activities$: Observable<any[]> = this.#service.getActivities$();
}
