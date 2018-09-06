import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable()
export class ApiService {
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'e9f612f1da425d22c891bc4c5a4ddde8';
  private movie_string: string;
  private serie_string: string;
  private id: string;

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
  getUsersSeries(userId) {
    return this.http.get(
      'http://localhost:3030/api/users_series/users/series/' + userId
    );
  }
  createUsersSeries(userserie) {
    return this.http.post(
      'http://localhost:3030/api/users_series/users/series/',
      userserie
    );
  }
  // utilisation pour l'api MovieDb pour afficher les series et une barre de recherche

  // searchMovie(movie: string) {
  //   this.movie_string = movie;
  //   return this.http.get(
  //     this.movie_url +
  //       'search/multi?query=' +
  //       this.movie_string +
  //       '&api_key=' +
  //       this.api_key
  //   );
  // }
  searchSerie(tv: string) {
    // this.serie_string = tv;
    return this.http.get(
      this.movie_url + 'search/tv?query=' + tv + '&api_key=' + this.api_key
    );
  }
  getUpcomingSeries() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(
      this.movie_url +
        'discover/tv?primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-08-31' +
        '&api_key=' +
        this.api_key
    );
  }

  getPopularSeries() {
    return this.http.get(
      this.movie_url +
        'discover/tv?page=2' +
        '&api_key=' +
        this.api_key
    );
  }
  // Methode pour recuperer ajouter lire une serie qui a etait ajouter par un utilisateur
  getUserSeries(id) {
    return this.http.get(
      this.movie_url + 'tv/' + id + '?api_key=' + this.api_key
    );
  }
  createSeries(serie) {
    const userSerie = { serie: serie, userId: localStorage.userID };
    return this.http.post('http://localhost:3030/api/series/', userSerie);
  }
}
