import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor( private router :Router, private pservice :ProductdataService) {}
  ngOnInit():void{

  this.pservice.setProductList(this.ListP) ;

  }
  choisir(arg0: any) {
 this.router.navigate(['/productis',arg0.id])
}
   ListP=[
    {'id':1 ,'nom':"PDA",'prix':"222"},
    {'id':2 ,'nom':"SVI",'prix':"9594315"},
    {'id':3 ,'nom':"COC",'prix':"1256"},
    {'id':4 ,'nom':"ODISEE",'prix':"2500"}]
   


}
