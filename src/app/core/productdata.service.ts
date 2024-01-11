import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  productList:any[]=[]
  setProductList(ListP:any[]):void{
    this.productList=ListP;
  }
  getProductList(): any[] {
    return this.productList;
  }
  
  constructor() { }
}
