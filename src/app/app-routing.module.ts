import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PiglatinComponent } from './piglatin/piglatin.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'piglatin-translator', component: PiglatinComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/piglatin-translator', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
