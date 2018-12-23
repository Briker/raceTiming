import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RacesComponent } from "./races.component";
import { RaceStartComponent } from "./race-start/race-start.component";
import { RaceListComponent } from "./race-list/race-list.component";
import { RaceEditComponent } from "./race-edit/race-edit.component";
import { RaceDetailComponent } from "./race-detail/race-detail.component";
import { RaceItemComponent } from "./race-list/race-item/race-item.component";
import { RacesRoutingModule } from "./races-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    RacesComponent,
    RaceStartComponent,
    RaceListComponent,
    RaceEditComponent,
    RaceDetailComponent,
    RaceItemComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RacesRoutingModule, SharedModule]
})
export class RacesModule {}
