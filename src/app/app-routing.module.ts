import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SketchComponent } from './sketch/sketch.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'sketch', component: SketchComponent },
  { path: 'asteroids', component: AsteroidsComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
