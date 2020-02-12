import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrgDetailComponent} from "./org-detail/org-detail.component";
import {OrgsComponent} from "./orgs/orgs.component";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '',   redirectTo: '/orgs', pathMatch: 'full' },
  { path: 'orgs', component: OrgsComponent },
  { path: 'orgs/details/:id',      component: OrgDetailComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
