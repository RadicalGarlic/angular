import { Component } from '@angular/core';

@Component({
    selector: 'inline-styled',
    template: '<p>InlineStyledComponent</p>',
    styles: ['p { color: darkblue; }']
})
export class InlineStyledComponent {}
