import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthentificationModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    RouterModule.forRoot([
        {path : 'home', component : HomeComponent},
        {path : 'connexion', component: AuthentificationComponent},
        {path : '', redirectTo: 'connexion',pathMatch : 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
