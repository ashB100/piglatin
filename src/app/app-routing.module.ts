import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PiglatinComponent } from './piglatin/piglatin.component';

const routes: Routes = [
  { path: '', component: PiglatinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
