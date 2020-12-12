import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TextDangerDirective } from './text-danger.directive';
import { DefaultInputDirective } from './default-input.directive';
import { AddRemoveClassDirective } from './add-remove-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextDangerDirective,
    DefaultInputDirective,
    AddRemoveClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
