import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthentificationService } from './authentification.service';
import { Personne } from '../model/personne';

@Component({
  moduleId : 'AuthentificationModule',
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})

export class AuthentificationComponent implements OnInit {
  personne : Personne ;
 
  
  constructor(private _authentificationService: AuthentificationService,  public router : Router) {
    this.personne = new Personne(0,"","",false);
  }

  ngOnInit() {          
  }
  
  connexion(userName, pwd){
           this._authentificationService.getPersonne(userName, pwd)
              .subscribe(
                    response =>
                          this.personne = new Personne(response.id, response.pwd,
                                                        response.userName, response.isAuthentified),
                    err => console.error(status)
                    );  
                    console.log(userName);
            if (this.personne.isAuthentified) this.router.navigate(['/home']);
  }
}