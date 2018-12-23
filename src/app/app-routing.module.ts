import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { RacerListComponent } from "./racer-list/racer-list.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "races", loadChildren: "./races/races.module#RacesModule" },
  { path: "racer-list", component: RacerListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
