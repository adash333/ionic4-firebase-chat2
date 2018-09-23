import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {

  data: { roomname: string } = { roomname: '' };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addRoom() {
    const newData = firebase.database().ref('chatrooms/')
    .push({
      roomname: this.data.roomname
    });
    this.router.navigate(['/signin']);
  }

}
