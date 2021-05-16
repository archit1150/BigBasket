import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tittle = 'BigBasket';
  name: string
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  itemSearch(name:any){
    this.name = name.searchName
    console.log(this.name);
    this.router.navigate(['/search',this.name]);
    

  }
}
