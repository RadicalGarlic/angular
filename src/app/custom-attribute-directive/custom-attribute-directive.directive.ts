import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appCustomAttributeDirective]' // square brackets for attribute directives
})
export class CustomAttributeDirective implements OnInit{
    // injecting inputs
    constructor(
        // holds reference to whatever element this attribute will get used on
        private elementRef: ElementRef,

        private renderer: Renderer2)
    {}

    // attributes have same lifecycle and hooks as components
    ngOnInit() {
        // // accessing elements like this is actually not good practice becuase angular can actually render templates without a DOM, which means these properties won't be available (if using something like a service worker). It's honestly kind of rare. Sometimes angular runs without a browser, so that's why.
        // this.elementRef.nativeElement.style.backgroundColor = 'cyan';

        // This is better.
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'background-color',
            'cyan');
    }
}
