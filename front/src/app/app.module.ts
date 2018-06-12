import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { IndexComponent } from './index/index.component';
import { ProfilComponent } from './profil/profil.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FpasswordComponent } from './fpassword/fpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscriptionComponent,
    IndexComponent,
    ProfilComponent,
    FpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
