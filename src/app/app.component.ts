import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCAXMbLxz7i3AqvTi97XyRETypWC25cEog',
      authDomain: 'udemy-course-project-844a5.firebaseapp.com',
    });
  }
}
