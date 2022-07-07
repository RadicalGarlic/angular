import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  numClicks: number;
  textInput: string;

  constructor() {
    this.numClicks = 0;
    this.textInput = '';
  }

  ngOnInit(): void {
  }

  onButton() {
    this.numClicks += 1;
  }

  onTextInput(event) {
    // Dump out to console.log(event) if you're unsure of fields
    console.log(event)
    this.textInput = event.target.value;
  }
}
