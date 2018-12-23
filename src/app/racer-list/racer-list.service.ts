import { Racer } from "../shared/racer.model";
import { Subject } from "rxjs/Subject";

export class RacerListService {
  racersChanged = new Subject<Racer[]>();
  startedEditing = new Subject<number>();
  private racers: Racer[] = [new Racer(1, "Adi"), new Racer(2, "Tom")];

  getRacers() {
    return this.racers.slice();
  }

  getRacer(index: number) {
    return this.racers[index];
  }

  addRacer(racer: Racer) {
    this.racers.push(racer);
    this.racersChanged.next(this.racers.slice());
  }

  addRacers(racers: Racer[]) {
    this.racers.push(...racers);
    this.racersChanged.next(this.racers.slice());
  }

  updateRacer(index: number, newRacer: Racer) {
    this.racers[index] = newRacer;
    this.racersChanged.next(this.racers.slice());
  }

  deleteRacer(index: number) {
    this.racers.splice(index, 1);
    this.racersChanged.next(this.racers.slice());
  }
}
