import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Race } from "../race.model";
import { RaceService } from "../race.service";

@Component({
  selector: "app-race-list",
  templateUrl: "./race-list.component.html",
  styleUrls: ["./race-list.component.css"]
})
export class RaceListComponent implements OnInit, OnDestroy {
  races: Race[];
  subscription: Subscription;

  constructor(
    private raceService: RaceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.raceService.racesChanged.subscribe(
      (races: Race[]) => {
        this.races = races;
      }
    );
    this.races = this.raceService.getRaces();
  }

  onNewRace() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
