import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private httphandler: HttpHandler) {}

  createUser(user) {
    // console.log(user);
    return this.http.post('http://localhost:3030/api/users/', user);

    // la fonction createUser utilise une methode HTTP post qui elle me permet de creer un utilisateur
    // http post me revoie un obsevable,
    // pour observer et declancher un obsevable, il faut appeler la methode subscribe de observalbe (cf.inscription.component.ts )
  }
  UserExist(existe) {
    return this.http.get('http://localhost:3030/api/users/' + existe);
  }
  getUserById(id) {
    return this.http.get(
      'http://localhost:3030/api/users/' + localStorage.userID
    );
  }
  getUserByEmail(email) {
    return this.http.get('http://localhost:3030/api/users/mail/' + email);
  }
  getUserByFirstname(firstname) {
    return this.http.get('http://localhost:3030/api/users/' + firstname);
  }
  getPseudoMail(user) {
    return this.http.get(
      'http://localhost:3030/api/users/login/' +
        user.addressmail +
        '/' +
        user.pseudo
    );
  }
}
