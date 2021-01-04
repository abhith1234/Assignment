import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Que1Component } from './que1/que1.component';
import { Que2Component } from './que2/que2.component';
import { Que3Component } from './que3/que3.component';
import { Que4Component } from './que4/que4.component';

@NgModule({
  declarations: [
    AppComponent,
    Que1Component,
    Que2Component,
    Que3Component,
    Que4Component
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
