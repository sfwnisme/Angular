import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "home page",
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Details Page",
  },
];

export default routeConfig;

// import { HomeComponent } from "./home/home.component";

// const routeConfig: Routes = [
//   {
//     path: "",
//     component: HomeComponent,
//     title: "Home",
//   },
// ];
// export default routeConfig;
