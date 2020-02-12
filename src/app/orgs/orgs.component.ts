import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.component.html',
  styleUrls: ['./orgs.component.scss']
})
export class OrgsComponent implements OnInit {

  /* must be typed better */
  orgs: any[] = [];
  fetchedOrgs: any[] = [];

  constructor(private http: HttpClient) { }
  reverse = true;
  searchTerm: string = '';
  column: string = 'login';
  ngOnInit(){
    this.http.get('https://api.github.com/organizations?per_page=1000&page=3').subscribe( (item: any[]) => {
      this.orgs = [...item];
      this.fetchedOrgs = [...item]
    })
  }
  clickLogin(){
    if(this.column === 'login'){
      this.reverse = !this.reverse;
    }
    this.column = 'login';
  }

  search(): void {
    let term = this.searchTerm;
    this.orgs = this.fetchedOrgs.filter(function(tag) {
      return tag.login.indexOf(term) >= 0;
    });
  }

}
