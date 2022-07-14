import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective implements OnInit {
  // same as the ones in nativeElement
  // make sure that the element on which this directive will sit has the specified property
  @HostBinding('style.backgroundColor')
  backgroundColor: string = '';

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'cyan';

  // Event binding with @Output() also works with directives too. Not used that often though.

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  setColor(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  clearColor(): void {
    this.backgroundColor = this.defaultColor;
  }
}
