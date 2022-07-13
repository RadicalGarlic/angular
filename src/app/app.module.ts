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
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ExternalPropertyBindComponent } from 'src/app/external-property-bind/external-property-bind.component';
import { ExternalEventBindComponent } from './external-event-bind/external-event-bind.component';
import { GlobalStyleComponent } from './global-style/global-style.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ContentChildComponent } from './content-child/content-child.component';

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
    NgifComponent,
    NgstyleComponent,
    NgclassComponent,
    NgforComponent,
    ExternalPropertyBindComponent,
    ExternalEventBindComponent,
    GlobalStyleComponent,
    LocalReferenceComponent,
    ViewChildComponent,
    NgcontentComponent,
    LifecycleComponent,
    ContentChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Necessary for two-way databinding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
