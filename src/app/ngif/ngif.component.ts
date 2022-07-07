import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  hidden: boolean;
  primary: boolean;

  constructor() {
    this.hidden = false;
    this.primary = true;
  }

  ngOnInit(): void {
  }

  toggleHidden() {
    console.log("toggle");
    this.hidden = !this.hidden;
  }

  toggleText() {
    this.primary = !this.primary;
  }
}
