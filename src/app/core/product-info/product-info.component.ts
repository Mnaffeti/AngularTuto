import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
proid: any;
   sharedlist:any[]=[] ; 
   Pname:any="" ; 
  constructor(private route:ActivatedRoute,private pservice:ProductdataService){}
  ngOnInit() {
    let vid=(this.route.snapshot.paramMap.get('id')) ;
    console.log(vid) ;
    this.proid=vid 
    this.sharedlist=this.pservice.getProductList() ; 
    this.sharedlist=this.sharedlist.filter(pp=>pp.id==vid) ; 
    this.Pname=this.sharedlist.map(n=>n.nom) ;
    console.log(this.sharedlist) 
    
   

  }

}
