import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  numClicks: number;

  constructor() {
    this.numClicks = 0;
  }

  ngOnInit(): void {
  }

  onButton() {
    this.numClicks += 1;
  }
}
