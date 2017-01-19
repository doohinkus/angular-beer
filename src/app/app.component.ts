import { Component, AfterViewInit} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
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

  kegs: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.kegs = af.database.list('/kegs');
  }
  showDetails(keg){
    if (this.currentBeer != keg){
      this.currentBeer = keg;
      this.details = true;
    }else{
      this.currentBeer = null;
      this.details = false;
    }
  }
  showEdit(keg){
    if (this.currentBeerEdit != keg){
      this.currentBeerEdit = keg;
      this.edit = true;
    }else{
      this.currentBeerEdit = null;
      this.edit = false;
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
      salePercentage : this.currentBeerEdit.salePercentage,
      pints : this.currentBeerEdit.pints,
      imageUrl: this.currentBeerEdit.imageUrl
    });
    this.edit = false;
  }

  addKeg(){

      this.kegs.push({
        name : this.name,
        description : this.description,
        origin : this.origin,
        brand : this.brand,
        price : this.price,
        ABV : this.abv,
        IBU : this.ibu,
        style : this.style,
        salePercentage : 0,
        pints : this.pints,
        imageUrl: this.imageurl
      })

  }

  ngAfterViewInit(){

      }
}
