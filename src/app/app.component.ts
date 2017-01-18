import { Component, AfterViewInit} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
  declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  details: boolean = false;
  edit: boolean = false;
  currentBeer: any;
  currentBeerEdit: any;
  height: number;

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

  ngAfterViewInit(){
  //   var $container = $('.beer-container');
  //   var $bubbles = $('.bubbles');
  //   var bubbleCount = 50;
  //   var maxTime = 10;
  //   var minTime = 3;
  //   var maxWidth = 10;
  //   var minWidth = 2;
  //   var minOpacity = 0.2;
  //   var maxOpacity = 1;
  //
  //   $('.color-selector a').on('click', function(){
  //   	$('.liquid').css('background-image', $(this).css('background-image'));
  //   });
  //   $('.color-selector a:first-child').click();
  //
  //   $('input').on('input', function(){
  //   	$container.css('height', $(this).val() + '%');
  //   });
  //
  //   function _reset($el){
  //   	var randTime = (Math.random() * (maxTime - minTime)) + minTime;
  //   	var randWidth = (Math.random() * (maxWidth - minWidth)) + minWidth;
  //   	var percLeft = Math.random() * 100;
  //   	var randOpacity = (Math.random() * (maxOpacity - minOpacity)) + minOpacity;
  //
  //   	$el.css({
  //   		'bottom': '0%',
  //   		'-webkit-transition-duration': '0s',
  //   		'width': randWidth + '%',
  //   		'left': percLeft + '%',
  //   		'opacity': randOpacity
  //   	});
  //
  //   	setTimeout(function(){
  //   		$el.css({
  //   			'-webkit-transition-duration': randTime + 's',
  //   			'bottom': '100%'
  //   		})
  //   	}, 10);
  //   }
      }
}
