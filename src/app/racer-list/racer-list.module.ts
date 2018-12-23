import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { RacerListComponent } from "./racer-list.component";
import { RacerEditComponent } from "./racer-edit/racer-edit.component";

@NgModule({
  declarations: [RacerListComponent, RacerEditComponent],
  imports: [CommonModule, FormsModule]
})
export class RacerListModule {}
