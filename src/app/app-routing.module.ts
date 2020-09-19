import { redirect } from "./helpers/redirect";
import { MainComponent } from "./components/main/main.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: redirect(),
    pathMatch: 'full'
  },
  {
    path: 'ru',
    component: MainComponent
  },
  {
    path: 'en',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
