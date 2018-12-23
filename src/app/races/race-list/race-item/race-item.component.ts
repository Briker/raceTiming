import { Component, OnInit, Input } from "@angular/core";

import { Race } from "../../race.model";

@Component({
  selector: "app-race-item",
  templateUrl: "./race-item.component.html",
  styleUrls: ["./race-item.component.css"]
})
export class RaceItemComponent implements OnInit {
  @Input() race: Race;
  @Input() index: number;

  ngOnInit() {}
}
