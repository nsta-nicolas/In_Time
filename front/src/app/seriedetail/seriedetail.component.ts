import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['tvID'];
      this.api.getUserSeries(id).subscribe(data => {
        this.serie = data;

        // console.log(data);
      });
    });
    setTimeout(() => (this.staticAlertClosed = true), 2000);
    this._success.subscribe(message => (this.successMessage = message));
    this._success
      .pipe(debounceTime(900))
      .subscribe(() => (this.successMessage = null));
  }

  public changeSuccessMessage() {
    this._success.next(`Votre serie a était correctement ajoutè :)`);
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
