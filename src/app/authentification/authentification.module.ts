import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AuthentificationService } from './authentification.service';
@NgModule({
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ],
  providers: [AuthentificationService],
  declarations: []
})
export class AuthentificationModule { }
