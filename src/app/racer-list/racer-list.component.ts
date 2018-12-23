import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { Racer } from "../shared/racer.model";
import { RacerListService } from "./racer-list.service";

@Component({
  selector: "app-racer-list",
  templateUrl: "./racer-list.component.html",
  styleUrls: ["./racer-list.component.css"]
})
export class RacerListComponent implements OnInit, OnDestroy {
  racers: Racer[];
  private subscription: Subscription;

  constructor(private rlService: RacerListService) {}

  ngOnInit() {
    this.racers = this.rlService.getRacers();
    this.subscription = this.rlService.racersChanged.subscribe(
      (racers: Racer[]) => {
        this.racers = racers;
      }
    );
  }

  onEditItem(index: number) {
    this.rlService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
