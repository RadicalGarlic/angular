import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {
  // For Angular 8+, @ContentChild() needs {static: true} `@ContentChild('someString', {static:true})` to be used in ngOnInit. If you need access in other places BUT NOT in ngOnInit, you must set it to `static:false`. In Angular 9+, `static:true` must be set but `static:false` is optional.
  // ContentChildren are not available in ngOnInit but are in ngAfterContentInit (TODO make example)
  @ContentChild('localRefNgContent', {static:true})
  projected: ElementRef

  constructor() { }

  ngOnInit(): void { }

  getProjected() {
    return JSON.stringify(this.projected);
  }
}
