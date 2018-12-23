import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { Race } from "../race.model";
import { RaceService } from "../race.service";

@Component({
  selector: "app-race-detail",
  templateUrl: "./race-detail.component.html",
  styleUrls: ["./race-detail.component.css"]
})
export class RaceDetailComponent implements OnInit {
  race: Race;
  id: number;

  constructor(
    private raceService: RaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.race = this.raceService.getRace(this.id);
    });
  }

  onAddToRacerList() {
    this.raceService.addRacersToSRacerList(this.race.racers);
  }

  onEditRace() {
    this.router.navigate(["edit"], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRace() {
    this.raceService.deleteRace(this.id);
    this.router.navigate(["/races"]);
  }
}
