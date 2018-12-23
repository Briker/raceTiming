import { Component, OnInit } from "@angular/core";

import { Race } from "src/app/races/race.model";
import { RaceService } from "src/app/races/race.service";
import { Racer } from "src/app/shared/racer.model";

@Component({
  selector: "app-timing",
  templateUrl: "./timing.component.html",
  styleUrls: ["./timing.component.css"]
})
export class TimingComponent implements OnInit {
  currentRace: Race;
  currentRacer: Racer;
  currentNumber: number;
  currentIndex: number;
  currentTime: string;
  currentTimeSec: number;
  currentTimestamp: Date;
  interval: any;

  constructor(private raceService: RaceService) {}

  ngOnInit() {
    this.currentNumber = 1;
    this.currentIndex = 0;
  }

  getTimeWithMilliseconds(date: Date) {
    return `${date.toLocaleTimeString("it-US")}.${date.getMilliseconds()}`;
  }

  setTimestamp(index: number) {
    this.currentRace = this.raceService.getCurrentRace();
    this.currentTimestamp = new Date();

    this.currentRace.racers[this.currentIndex].timestamps[
      index
    ] = this.currentTimestamp;

    this.raceService.updateRaces(this.currentIndex, this.currentRace);
  }

  getTimestampMs(index: number) {
    this.currentRace = this.raceService.getCurrentRace();
    const time = this.currentRace.racers[this.currentIndex].timestamps[index];
    if (time != undefined) {
      return time.getTime();
    }
    return 0.0;
  }

  updateRaceTime() {
    const endTime = this.getTimestampMs(1);
    const startTime = this.getTimestampMs(0);

    if (endTime != 0 && startTime != 0) {
      let timeDiff = Math.abs(endTime - startTime);
      this.currentTimeSec = timeDiff / 1000;
    } else {
      this.currentTimeSec = 0;
    }
    this.currentTimeSec.toFixed(2);
  }

  onStart() {
    this.setTimestamp(0);

    this.interval = setInterval(() => {
      const timeNow = new Date();
      let timeDiff = Math.abs(
        timeNow.getTime() - this.currentTimestamp.getTime()
      );
      this.currentTimeSec = timeDiff / 1000;
      this.currentTime = this.currentTimeSec.toFixed(2);
    }, 250);

    //const ms = this.cur.rentTimestamp.getMilliseconds();
    //console.log(ms);
    //this.currentTime = this.getTimeWithMilliseconds(this.currentTimestamp);
  }

  onStop() {
    this.setTimestamp(1);

    this.updateRaceTime();

    clearInterval(this.interval);
  }

  onMinus() {
    this.currentNumber--;
    if (this.currentNumber < 1) {
      this.currentNumber = 1;
    }
    this.currentIndex = this.currentNumber - 1;

    this.updateRaceTime();
  }

  onPlus() {
    this.currentNumber++;
    if (this.currentNumber > 1000) {
      this.currentNumber = 1000;
    }
    this.currentIndex = this.currentNumber - 1;

    this.updateRaceTime();
  }
}
