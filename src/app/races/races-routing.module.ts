import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "../auth/auth-guard.service";
import { RaceEditComponent } from "./race-edit/race-edit.component";
import { RaceDetailComponent } from "./race-detail/race-detail.component";
import { RaceStartComponent } from "./race-start/race-start.component";
import { RacesComponent } from "./races.component";

const racesRoutes: Routes = [
  {
    path: "",
    component: RacesComponent,
    children: [
      { path: "", component: RaceStartComponent },
      { path: "new", component: RaceEditComponent, canActivate: [AuthGuard] },
      { path: ":id", component: RaceDetailComponent },
      {
        path: ":id/edit",
        component: RaceEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(racesRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RacesRoutingModule {}
