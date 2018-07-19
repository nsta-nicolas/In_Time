import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}
  sendLogin() {
    // this.api.getUserByEmail(this.user.addressmail).subscribe(result => {
    //   console.log(result);
    //   localStorage.userID = result.id;
    //   localStorage.userEmail = result.addressmail;
    //   this.router.navigateByUrl('/home');
    // });
    this.api.getPseudoMail(this.user.pseudo).subscribe(result => {
      // localStorage.userName = result.pseudo;
      // localStorage.userName = result.addressmail;
      this.router.navigateByUrl('/home');
    });
    // console.log('coucou');
  }
}
