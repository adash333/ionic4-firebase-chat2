import { Component, OnInit } from '@angular/core';
//import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  rooms = [];

  constructor(private router: Router) { }

async ngOnInit() {

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.database().ref('chatrooms/').on('value', resp => {
        if (resp) {
          this.rooms = [];
          resp.forEach(childSnapshot => {
            const room = childSnapshot.val();
            room.key = childSnapshot.key;
            this.rooms.push(room);
          });
        }
      });
      } else {
        this.router.navigate(['/signin']);
      }
    });
  }

  joinRoom(key) {
    this.router.navigate(['/chat/' + key]);
  }

  addRoom() {
    this.router.navigate(['/add-room']);
  }

  async signOut() {
    try {
      await firebase.auth().signOut();
      this.router.navigate(['/signin']);

    } catch (error) {}
  }
}
