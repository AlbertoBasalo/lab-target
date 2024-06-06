import { Component } from "@angular/core";
import { LocationComponent } from "lab-ui";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [LocationComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <lab-ui-location value="Mars" />
  `,
  styles: [],
})
export class AppComponent {
  title = "lab-target";
}
