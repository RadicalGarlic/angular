import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  externalEventBindResult: string = '0';

  externalEventHandler(event: { value: string }) {
    this.externalEventBindResult = event.value;
  }
}
