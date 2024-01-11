import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponentComponent } from './core/residences-component/residences-component.component';
import { ApartementComponent } from './core/apartement/apartement.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './core/footer/footer.component';
import { ProductComponent } from './core/product/product.component';
import { HomeComponent } from './core/home/home.component';
import { AppcComponent } from './core/appc/appc.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ProductInfoComponent } from './core/product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponentComponent,
    ApartementComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    AppcComponent,
    NotfoundComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
