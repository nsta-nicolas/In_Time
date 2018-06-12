import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent } from '../home/home.component'
import { IndexComponent } from '../index/index.component';
import { FpasswordComponent } from '../fpassword/fpassword.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ProfilComponent } from '../profil/profil.component';

const routes : Routes = [
{path: '', redirectTo:'/home', pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'index',component:IndexComponent},
{path:'password',component:FpasswordComponent},
{path:'inscription',component:InscriptionComponent},
{path:'profil',component:ProfilComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),NgbModule.forRoot() ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
