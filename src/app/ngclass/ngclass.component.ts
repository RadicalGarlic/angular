import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  goodStatus: boolean;

  constructor() {
    this.goodStatus = true;
  }

  ngOnInit(): void {
  }

  toggle() {
    this.goodStatus = !this.goodStatus;
  }
}
