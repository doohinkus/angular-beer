import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import {config} from './api-key';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
// import { ModalModule } from 'ng2-bootstrap/modal'
// import { PercentagePipe } from './percentage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
