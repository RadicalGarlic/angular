import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-external-event-bind',
  templateUrl: './external-event-bind.component.html',
  styleUrls: ['./external-event-bind.component.css']
})
export class ExternalEventBindComponent implements OnInit {
  // @Output() also can take in a string for an alias to bind to instead.
  // Can only talk to parent<->child (NOT siblings or anything else).
  @Output() internalEvent = new EventEmitter<{value: string}>();

  numClicks = 0;

  constructor() { }

  ngOnInit(): void { }

  emitEvent(): void {
    this.numClicks += 1;
    this.internalEvent.emit({value: String(this.numClicks)});
  }
}
