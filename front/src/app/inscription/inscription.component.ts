import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user = {
    firstname: '',
    lastname: '',
    pseudo: '',
    addressmail: ''
  };
  error;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}
  sendUser() {
    // console.log(this.user);
    console.log('test fonctionne');
    this.api.createUser(this.user).subscribe(
      (result: any) => {
        console.log('coucou', result);
        localStorage.userID = result.id;
        this.router.navigateByUrl('/home');
      },
      error => {
        this.error = error;
        console.log('erreur utilisateur', error.error);
      }
    );
  }
  getUserById() {}
}
