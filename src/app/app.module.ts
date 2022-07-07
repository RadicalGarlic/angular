import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Necessary for two-way databinding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CliBornComponent } from './cli-born/cli-born.component';
import { InlineComponent } from './inline/inline.component';
import { NestedComponent } from './nested/nested.component';
import { StyledComponent } from './styled/styled.component';
import { InnerComponent } from './nested/inner/inner.component';
import { SelectorComponent } from './selector/selector.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { StringInterpolationComponent } from './databinding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './databinding/property-binding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './databinding/two-way-data-binding/two-way-data-binding.component';
import { NgifComponent } from './ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    CliBornComponent,
    InlineComponent,
    InnerComponent,
    NestedComponent,
    SelectorComponent,
    ServerComponent,
    StyledComponent,
    DatabindingComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Necessary for two-way databinding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
