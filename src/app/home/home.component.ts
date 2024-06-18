import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
// import { HousingLocation } from "../housinglocation";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <p class="housing-locations-container">
      home works!
      <!-- reusable component -->
      <app-housing-location
        name="sfwn"
        age="25"
        job-title="frontend"
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </p>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "NY",
      photo: "https://picsum.photos/200/300?random=1",
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      city: "Los Angeles",
      state: "CA",
      photo: "https://picsum.photos/200/300?random=2",
      availableUnits: 3,
      wifi: false,
      laundry: true,
    },
    {
      id: 3,
      name: "Jim Doe",
      city: "Chicago",
      state: "IL",
      photo: "https://picsum.photos/200/300?random=3",
      availableUnits: 4,
      wifi: true,
      laundry: false,
    },
  ];
}
