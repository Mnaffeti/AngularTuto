import { Component } from '@angular/core';
import { Residence } from '../models/Residence';
import { Apartment } from '../models/Appartement';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  ListFav:any[]=[] ; 
  res!:Residence ;
    show!:String;
    showErr!:String;
    idTest:number=0;
    Apptmp: Apartment | null = null
    iter:number=0 ; 
    buttonClicked = false;

  listResidences:Residence[]=[
       {id:1,name: 'El fel',address:'Borj Cedria',
    image:'../../assets/images/R1.jpg'},
        {id:2,name: 'El yasmine',
    address:'Ezzahra',image:'../../assets/images/R2.jpg'},
        {id:3,name: 'El Arij',
    address:'Rades','image':'../../assets/images/R3.jpg'},
        {id:4,name: 'El Anber',address:'Manzah 5',
    image:'../../assets/images/R4.jpg'}
      ];

    listApartments:Apartment[]=[
   
      {id:1,appartNum:1,floorNum:0,surface:100,terrace:"oui",surfaceTerrace:20,category:"S+1",description:"AppartementS+1",residence:this.listResidences[0] },
         
      {id:2,appartNum:2,floorNum:0,surface:130,terrace:'non',surfaceTerrace:0,category:'S+2',description:'AppartementS+2',residence:this.listResidences[1] }]
     
      Show(a:number):String {
     this.iter=0;
     this.showErr="";
     
        for(let ap of this.listApartments){
            
            if(ap.residence.id==a){
              this.iter+=1 ;   
              this.idTest=ap.residence.id;
              this.showErr=ap.description;
              this.Apptmp=ap;
              console.log(ap) ; 
             
            }
          }
        if(this.iter==0){
          this.showErr="mafichou "; 
          console.log("mafichou") ; 
        } 
        this.buttonClicked=true ;
        return this.showErr ;   
          

        
      }
}

