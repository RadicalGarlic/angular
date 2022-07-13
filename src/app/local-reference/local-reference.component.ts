import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent implements OnInit {
  inputValue: string = 'type in some text and click the button';

  constructor() { }

  ngOnInit(): void { }

  onClick(htmlElement: HTMLInputElement) {
    this.inputValue = htmlElement.value;
  }
}
