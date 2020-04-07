import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Resolver } from './shared/resolver';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent, resolve: { obj: Resolver }
  },
  { path: 'home', component: HomeComponent,  resolve: { obj: Resolver } }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
