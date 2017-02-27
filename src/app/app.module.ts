import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ScheduleModule, DialogModule, ButtonModule, InputTextareaModule, DropdownModule, CalendarModule, TabViewModule, DataListModule, PanelModule, DataTableModule,SharedModule,GrowlModule,ToolbarModule} from 'primeng/primeng';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyBK0qd_4ojUSmXNqlTnXedoKigJkxPsPlo',
  authDomain: 'expresoride.firebaseapp.com',
  databaseURL: 'https://expresoride.firebaseio.com',
  storageBucket: 'expresoride.appspot.com',
  messagingSenderId: '741575044761'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScheduleModule,
    DialogModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    DropdownModule,
    TabViewModule,
    DataListModule,
    PanelModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    ToolbarModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
