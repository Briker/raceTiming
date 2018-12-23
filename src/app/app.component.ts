import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "race";

  ngOnInit() {
    /*
    firebase.initializeApp({
      apiKey: "AIzaSyA43EQ330ZRNugIEa9I5Ll0Q3CrFaYNDZ0",
      authDomain: "racetiming-4897f.firebaseapp.com"
    });*/
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC-2bMKJ3UMc5Vs3pDYGJHp8TIWgshSIwg",
      authDomain: "racetiming-c50ad.firebaseapp.com",
      databaseURL: "https://racetiming-c50ad.firebaseio.com",
      projectId: "racetiming-c50ad",
      storageBucket: "racetiming-c50ad.appspot.com",
      messagingSenderId: "1025370043087"
    };
    firebase.initializeApp(config);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
