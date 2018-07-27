import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seriedetail',
  templateUrl: './seriedetail.component.html',
  styleUrls: ['./seriedetail.component.css']
})
export class SeriedetailComponent implements OnInit {
  serie: any = {
    name: '',
    overview: '',
    photo: '',
    api_id: ''
  };
  userserie = {
    userId: '',
    serieId: ''
  };
  tv: any;

  constructor(private router: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['tvID'];
      this.api.getUserSeries(id).subscribe(data => {
        this.serie = data;

        // console.log(data);
      });
    });
  }
  addSerie() {
    // console.log('ajout de la serie en base');
    this.api.createSeries(this.serie).subscribe(
      result => {
        // console.log('1', result);
      },
      error => {}
    );
  }
  addUsersSeries() {
    this.api.createUsersSeries(this.userserie).subscribe();
  }
}
