import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './core/residences-component/residences-component.component';
import { ApartementComponent } from './core/apartement/apartement.component';

const routes: Routes = [
  { path: 'resid', component: ResidencesComponentComponent },{path:'appart', component:ApartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
