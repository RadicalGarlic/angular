import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  // For Angular 8+, @ViewChild() needs {static: true} `@ViewChild('someString', {static:true})` to be used in ngOnInit. If you need access in other places BUT NOT in ngOnInit, you must set it to `static:false`. In Angular 9+, `static:true` must be set but `static:false` is optional.
  // First arg can also be just a component type (@ViewChild(SomeComponent, ...)). Note the lack of quotes around the type name.
  @ViewChild('localRef', {static: true})
  inputValue: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  getInputValueString() {
    // It's possible to do something like `this.inputValue.nativeElement.value = 'something'`, but it's considered bad practice.
    // There are better ways to manipulate the DOM.
    return this.inputValue.nativeElement.value;
  }
}
