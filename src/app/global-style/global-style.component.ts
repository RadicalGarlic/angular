import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-style',
  templateUrl: './global-style.component.html',
  styleUrls: ['./global-style.component.css'],

  // Options are Emulated (default), None, and Native (shadow DOM)
  encapsulation: ViewEncapsulation.None
})
export class GlobalStyleComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
