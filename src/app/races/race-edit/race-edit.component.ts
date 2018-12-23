import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import { RaceService } from "../race.service";

@Component({
  selector: "app-race-edit",
  templateUrl: "./race-edit.component.html",
  styleUrls: ["./race-edit.component.css"]
})
export class RaceEditComponent implements OnInit {
  id: number;
  editMode = false;
  raceForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private raceService: RaceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.raceService.updateRaces(this.id, this.raceForm.value);
    } else {
      this.raceService.addRace(this.raceForm.value);
    }
    this.onCancel();
  }

  onAddRacer() {
    (<FormArray>this.raceForm.get("racers")).push(
      new FormGroup({
        number: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        name: new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteRacer(index: number) {
    (<FormArray>this.raceForm.get("racers")).removeAt(index);
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  getControls() {
    return (<FormArray>this.raceForm.get("racers")).controls;
  }

  private initForm() {
    let raceName = "";
    let raceImagePath = "";
    let raceDescription = "";
    let raceRacers = new FormArray([]);

    if (this.editMode) {
      const race = this.raceService.getRace(this.id);
      raceName = race.name;
      raceImagePath = race.imagePath;
      raceDescription = race.description;
      if (race["racers"]) {
        for (let racer of race.racers) {
          raceRacers.push(
            new FormGroup({
              name: new FormControl(racer.name, Validators.required),
              number: new FormControl(racer.number, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.raceForm = new FormGroup({
      name: new FormControl(raceName, Validators.required),
      imagePath: new FormControl(raceImagePath, Validators.required),
      description: new FormControl(raceDescription, Validators.required),
      racers: raceRacers
    });
  }
}
