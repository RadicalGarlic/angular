import {
  Directive,
  HostListener,
  OnInit,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective implements OnInit{
    // injecting inputs
    constructor(
        // holds reference to whatever element this attribute will get used on
        private elementRef: ElementRef,

        private renderer: Renderer2)
    {}

  ngOnInit() {
  }

  @HostListener('mouseenter') // an event that's available from the DOM element
  mouseOver(event: Event): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'cyan');
  }

  @HostListener('mouseleave')
  mouseLeave(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent');
  }
}
