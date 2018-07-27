import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userserie = {
    userId: '',
    serieId: ''
  };
  constructor(private api: ApiService) {}

  ngOnInit() {}
  addUsersSeries() {
    this.api.createUsersSeries(this.userserie).subscribe();
  }
}
