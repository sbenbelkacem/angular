import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthentificationService {
    constructor (private _http : Http){

    }

    /*getPersonne(userName, pwd){
        return this._http.get('http://localhost:8080/mvcdata/api/rest/resources/personnes')
                .do(x => console.log(x))
                .map(personnes => personnes.json());
    }*/

    getPersonne(userName, pwd){
    return this._http.get('assets/personne-authentified.json')
                .map(personne => personne.json());
    }
}