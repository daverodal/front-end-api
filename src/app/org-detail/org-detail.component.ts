import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.scss']
})
export class OrgDetailComponent implements OnInit {

  org = null;
  publicMembers: any[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get('https://api.github.com/orgs/'+id).subscribe( (item: any) => {
      this.org = item;
      let publicMembers = item.public_members_url;
      publicMembers = publicMembers.replace(/\{.*$/,'');
      this.http.get(publicMembers).subscribe( (item: any[]) => {
          this.publicMembers = item;
     })
    })
  }

}
