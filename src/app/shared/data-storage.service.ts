import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

import { RaceService } from "../races/race.service";
import { Race } from "../races/race.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private raceService: RaceService,
    private authService: AuthService
  ) {}

  storeRaces() {
    const token = this.authService.getToken();

    return this.http.put(
      "https://racetiming-c50ad.firebaseio.com/races.json?auth=" + token,
      this.raceService.getRaces()
    );
  }

  getRaces() {
    const token = this.authService.getToken();

    this.http
      .get("https://racetiming-c50ad.firebaseio.com/races.json?auth=" + token)
      .map((response: Response) => {
        const races: Race[] = response.json();
        for (let race of races) {
          if (!race["ingredients"]) {
            race["ingredients"] = [];
          }
        }
        return races;
      })
      .subscribe((races: Race[]) => {
        this.raceService.setRaces(races);
      });
  }
}
