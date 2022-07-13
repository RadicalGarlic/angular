import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent
implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @ViewChild('localRef', {static:true})
  localRef: ElementRef;

  constructor() {
    console.log('constructor called before ngOnInit');
  }

  ngOnInit(): void {
    console.log('ngOnInit called after constructor');

    // This prints undefined because elements aren't initialized yet.
    // TODO: fix this example
    console.log(this.localRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Provides what changed
    console.log(`ngOnChanges: ${JSON.stringify(changes)}`);
  }

  ngDoCheck() {
    // usually happens on input type/click
    // TODO make example
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    // This prints something because elements are now initialized.
    console.log(this.localRef.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // TODO make example
    console.log('ngOnDestroy');
  }
}

/*
  ngOnChanges called after a bound property changes

  ngOnInit called once the component is initialized

  ngDoCheck called during every change detection run

  ngAfterContentInit called after content (ng-content) has been projected

  ngAfterContentChecked called every time projected ng-content is checked

  ngAfterViewInit called after component's view and child views are initialized

  ngAfterViewChecked called every time view and child views have been checked

  ngOnDestroy called once the component is about to be destroyed
*/
