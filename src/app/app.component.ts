import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';

// import {ModalModule} from "ngx-modal";


  declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  details: boolean = false;
  edit: boolean = false;
  add: boolean = false;
  currentBeer: any;
  currentBeerEdit: any;
  height: number;
  name:string;
  description:string;
  style:string;
  origin:string;
  brand:string;
  abv:string;
  ibu:string;
  pints:string;
  price:string;
  imageurl:string;
  salePercentage:string;
  pintsLeft:number;
  term:string;

  kegs: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.kegs = af.database.list('/kegs');

  }



  showDetails(keg){
    if (this.currentBeer != keg){
      this.currentBeer = keg;
      this.details = true;
    }else{
      // this.currentBeer = null;
      // this.details = false;
    }
  }
  showEdit(keg){
    if (this.currentBeerEdit != keg){
      this.currentBeerEdit = keg;
      this.edit = true;
    }else{
      // this.currentBeerEdit = null;
      // this.edit = false;
    }
  }
  showNew(){
    this.add = !this.add;
  }
  buyPint(key: string, keg){
    if (keg.pints>0){
      keg.pints-=1;
      this.kegs.update(key, { pints: keg.pints });
    }
    if (this.pintsLeft>0){
      this.pintsLeft=((keg.pints)/124)*100;
    }else{
      // this.pintsLeft=0;
      this.pintsLeft=50;
    }
  }
  editKeg(key: string){
    this.kegs.update(key, {
      name : this.currentBeerEdit.name,
      description : this.currentBeerEdit.description,
      origin : this.currentBeerEdit.origin,
      brand : this.currentBeerEdit.brand,
      price : this.currentBeerEdit.price,
      ABV : this.currentBeerEdit.ABV,
      IBU : this.currentBeerEdit.IBU,
      style : this.currentBeerEdit.style,
      salePercentage : 0,
      pints : this.currentBeerEdit.pints,
      imageUrl: this.currentBeerEdit.imageUrl
    });
    this.edit = false;
  }
  hideEdit(){
    this.add = false;
  }

  addKeg(name,
  description,
  origin,
  brand,
  price,
  abv,
  ibu,
  style,
  pints,
  imageurl){
    let thisKeg = {
      name : name,
      description : description,
      origin : origin,
      brand : brand,
      price : price,
      ABV : abv,
      IBU : ibu,
      style : style,
      salePercentage : 0,
      pints : pints,
      imageUrl: imageurl
    }
    if (!name || !description || !origin || !brand || !price || !abv ||
    !ibu || !style || !pints || !imageurl){
      alert("Please fill in all fields.");
    }else{

      this.kegs.push(thisKeg);
    }
      console.log("asdfsd", this.kegs);

  }

  ngAfterViewInit(){
    // this.pintsLeft= this.currentBeerEdit.pints;
  }
}
