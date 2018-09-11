import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user = {
    pseudo: '',
    addressmail: ''
  };
  error;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}
  sendLogin() {
    // this.api.getUserByEmail(this.user.addressmail).subscribe(result => {
    //   console.log(result);
    //   localStorage.userEmail = result.addressmail;
    //   this.router.navigateByUrl('/home');
    // });
    this.api.getPseudoMail(this.user).subscribe(
      (result: any) => {
        console.log(result);
        localStorage.userID = result.id;
        localStorage.Pseudo = result.pseudo;

        // localStorage.getItem('result.pseudo');

        // console.log(this.user);
        // localStorage.userName = result.pseudo;
        // localStorage.userName = result.addressmail;
        this.router.navigateByUrl('/home');
      },
      error => {
        this.error = error;
        console.log('mail non valide', error.error);
      }
    );
    // console.log('coucou');
  }
}
