import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>details works! {{ housingLocationId }}</p> `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = 0; // default value
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]); // get the id from the route params and convert it to a number
    console.log("data",this.route);
  }
}
