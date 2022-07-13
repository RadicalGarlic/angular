import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-external-property-bind',
    templateUrl: './external-property-bind.component.html',
    styles: []
})
export class ExternalPropertyBindComponent {
    // @Input() allows for all parent components to bind to annotated property
    // @Input() can take in a string to use an alias to bind to instead
    @Input() value: string = '';

    constructor() {}
}
