import { Component } from '@angular/core';
import { Apartment } from '../models/Appartement';
import { Residence } from '../models/Residence';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-apartement',
  templateUrl: './apartement.component.html',
  styleUrls: ['./apartement.component.css']
})
export class ApartementComponent {
  Tmptest:Boolean=false ;
  ListFavAp:any[]=[] ; 
  filtredList:any[]=[] ; 
  FilterCriteria: any;
 
likeAppart(_t10: Apartment) {
  console.log(this.ListFavAp.includes(_t10))
  if(!this.ListFavAp.includes(_t10.description))
  {
      this.ListFavAp.push(_t10.description) ; 
      console.log(this.ListFavAp) ;
  }
  
}
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}
    ];

  listApartments:Apartment[]=[
   
    {id:1,appartNum:1,floorNum:0,surface:100,terrace:"oui",surfaceTerrace:20,category:"S+1",description:"AppartementS+1",residence:this.listResidences[0] },
       
    {id:2,appartNum:2,floorNum:0,surface:130,terrace:'non',surfaceTerrace:0,category:'S+2',description:'AppartementS+2',residence:this.listResidences[1] },{id:3,appartNum:2,floorNum:0,surface:130,terrace:'non',surfaceTerrace:0,category:'S+5',description:'AppartementS+5',residence:this.listResidences[1] }]
    listFavoris:any[]=[];
    id!:number;
    ShowFav() {
      this.Tmptest=true ;
    }
    onKey(event: any) { // without type info
      this.FilterCriteria= event.target.value  ;
    }
    FilterApp(){
      this.filtredList=this.listApartments.filter((appart)=>appart.surface==this.FilterCriteria) ; 
      this.listApartments=this.filtredList ;
    }

}
