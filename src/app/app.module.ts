import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CliBornComponent } from './cli-born/cli-born.component';
import { InlineComponent } from './inline/inline.component';
import { NestedComponent } from './nested/nested.component';
import { StyledComponent } from './styled/styled.component';

@NgModule({
  declarations: [
    AppComponent,
    CliBornComponent,
    InlineComponent,
    NestedComponent,
    ServerComponent,
    StyledComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
