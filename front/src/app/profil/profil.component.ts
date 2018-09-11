import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userserie: any;
  series: any;
  users: any;
  constructor(private api: ApiService) {}

  ngOnInit() {
    if (localStorage.userID) {
      this.api.getUsersSeries(localStorage.userID).subscribe(data => {
        this.series = data;
        console.log(data);
      });
    }
    if (localStorage.Pseudo) {
      this.api.getUserByPseudo(localStorage.Pseudo).subscribe(data => {
        this.users = data;
        console.log(data);
      });
    }
  }
  addUsersSeries() {
    this.api.createUsersSeries(this.userserie).subscribe();
  }
  showUserSeries() {
    this.api.getUsersSeries(this.userserie);
  }
}
