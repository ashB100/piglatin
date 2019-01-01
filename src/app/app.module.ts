import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiglatinComponent } from './piglatin/piglatin.component';
import { PiglatinInputComponent } from './piglatin-input/piglatin-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PiglatinComponent,
    PiglatinInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
