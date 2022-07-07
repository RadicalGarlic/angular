import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  online: boolean

  constructor() {
    this.online = true;
  }

  ngOnInit(): void {
  }

  toggle() {
    this.online = !this.online;
  }

  getColor() {
    return this.online ? 'LightBlue' : 'red';
  }
}
