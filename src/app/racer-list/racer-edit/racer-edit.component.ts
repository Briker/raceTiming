import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Racer } from "../../shared/racer.model";
import { RacerListService } from "../racer-list.service";

@Component({
  selector: "app-racer-edit",
  templateUrl: "./racer-edit.component.html",
  styleUrls: ["./racer-edit.component.css"]
})
export class RacerEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Racer;

  constructor(private rlService: RacerListService) {}

  ngOnInit() {
    this.subscription = this.rlService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.rlService.getRacer(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          number: this.editedItem.number
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRacer = new Racer(value.number, value.name);
    if (this.editMode) {
      this.rlService.updateRacer(this.editedItemIndex, newRacer);
    } else {
      this.rlService.addRacer(newRacer);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.rlService.deleteRacer(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
