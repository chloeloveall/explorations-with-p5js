import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SketchComponent } from './sketch/sketch.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';

@NgModule({
  declarations: [
    AppComponent,
    SketchComponent,
    AsteroidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
