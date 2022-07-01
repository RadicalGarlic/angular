import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CliServerComponent } from './cli-server/cli-server.component';
import { InlineStyledComponent } from './inline-styled/inline-styled.component';
import { ClibabyComponent } from './server/clibaby/clibaby.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CliServerComponent,
    InlineStyledComponent,
    ClibabyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
