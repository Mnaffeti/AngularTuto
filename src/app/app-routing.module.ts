import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './core/residences-component/residences-component.component';
import { ApartementComponent } from './core/apartement/apartement.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProductComponent } from './core/product/product.component';
import { HomeComponent } from './core/home/home.component';
import { AppComponent } from './app.component';
import { AppcComponent } from './core/appc/appc.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ProductInfoComponent } from './core/product-info/product-info.component';

const routes: Routes = [
  
  { path: 'resid', component: ResidencesComponentComponent },{path:'appart', component:ApartementComponent},{path:'productis' ,component:ProductComponent},{path:'productis/:id',component:ProductInfoComponent},{path:'homewy',component:HomeComponent},{path:'appart/:id',component:AppcComponent},{
    path:'404',component:NotfoundComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
