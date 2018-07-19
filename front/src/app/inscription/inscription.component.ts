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

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}
  sendUser() {
    this.api.createUser(this.user).subscribe(result => {
      // console.log(result);
      // localStorage.userID = result.id;
      this.router.navigateByUrl('/home');
    });
  }
  getUserById() {}
}
