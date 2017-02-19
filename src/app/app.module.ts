import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
// import { ModalModule } from 'ng2-bootstrap/modal'
// import { PercentagePipe } from './percentage.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyDQmn4gW99M0tdYbr4vTLNNxoZNIXq79Zg",
  authDomain: "tap-room-14856.firebaseapp.com",
  databaseURL: "https://tap-room-14856.firebaseio.com",
  storageBucket: "tap-room-14856.appspot.com",
  messagingSenderId: "521076471627"
};

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
