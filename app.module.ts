import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Praktikum3Component } from './pages/praktikum3/Praktikum3.component';
import { Praktikum4Component } from './pages/praktikum4/Praktikum4.component';
import { Praktikum5Component } from './pages/praktikum5/Praktikum5.component';
import { Praktikum6Component } from './pages/praktikum6/Praktikum6.component';
import { Praktikum7Component } from './pages/praktikum7/Praktikum7.component';
import { Praktikum8Component } from './pages/praktikum8/Praktikum8.component';
import { Praktikum9Component } from './pages/praktikum9/Praktikum9.component';
import { Praktikum10Component } from './pages/praktikum10/Praktikum10.component';

@NgModule({
  declarations: [
    AppComponent,
    Praktikum3Component,
    Praktikum4Component,
    Praktikum5Component,
    Praktikum6Component,
    Praktikum7Component,
    Praktikum8Component,
    Praktikum9Component,
    Praktikum10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
