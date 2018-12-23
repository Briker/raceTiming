import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Race } from "./race.model";
import { Racer } from "../shared/racer.model";
import { RacerListService } from "../racer-list/racer-list.service";

@Injectable()
export class RaceService {
  racesChanged = new Subject<Race[]>();
  currentRace: Race;

  private races: Race[] = [
    new Race(
      "Training 1",
      "Training Brüsti 24.12.2018",
      "https://www.ski-racing.ch/uploads/tx_flexslider/Slider_Start_UEber_uns.jpg",
      [new Racer(1, "Armin"), new Racer(2, "Lilly")]
    ),
    new Race(
      "Training 2",
      "Training Brüsti 25.12.2018",
      "https://www.ski-racing.ch/uploads/tx_flexslider/Slider_Start_UEber_uns.jpg",
      [new Racer(1, "Lilly"), new Racer(2, "Fiona")]
    )
  ];

  constructor(private rlService: RacerListService) {}

  setRaces(races: Race[]) {
    this.races = races;
    this.racesChanged.next(this.races.slice());
  }

  getRaces() {
    return this.races.slice();
  }

  getRace(index: number) {
    this.currentRace = this.races[index];
    return this.races[index];
  }

  getCurrentRace() {
    if (this.currentRace != undefined) {
      return this.currentRace;
    } else {
      return this.races[0];
    }
  }

  addRacersToSRacerList(racers: Racer[]) {
    this.rlService.addRacers(racers);
  }

  addRace(race: Race) {
    this.races.push(race);
    this.racesChanged.next(this.races.slice());
  }

  updateRaces(index: number, newRace: Race) {
    this.races[index] = newRace;
    this.racesChanged.next(this.races.slice());
  }

  deleteRace(index: number) {
    this.races.splice(index, 1);
    this.racesChanged.next(this.races.slice());
  }
}
