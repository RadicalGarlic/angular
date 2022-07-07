import { Component } from '@angular/core';

@Component({
    selector: 'app-string-interpolation',
    template:'<p>string interpolation: {{ value }}, {{ numValue }}, {{ someFunc() }}</p>',
})
export class StringInterpolationComponent {
    value: string;
    numValue: number;

    constructor() {
        this.value = 'someString';
        this.numValue = 5;
    }

    someFunc() {
        return "someFunc()";
    }
}
