import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SketchComponent } from './sketch/sketch.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';

const routes: Routes = [
  { path: 'sketch', pathMatch: 'full', component: SketchComponent },
  { path: 'asteroids', pathMatch: 'full', component: AsteroidsComponent },
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
