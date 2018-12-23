import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { TimingComponent } from "./timing/timing.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";
import { RaceService } from "../races/race.service";
import { RacerListService } from "../racer-list/racer-list.service";

@NgModule({
  declarations: [HeaderComponent, HomeComponent, TimingComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [RacerListService, RaceService, DataStorageService, AuthService]
})
export class CoreModule {}
