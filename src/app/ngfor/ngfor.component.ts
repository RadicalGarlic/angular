import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  arr: Array<number>

  constructor() {
    this.arr = []
  }

  ngOnInit(): void {
  }

  bump() {
    this.arr.push(1);
  }
}
