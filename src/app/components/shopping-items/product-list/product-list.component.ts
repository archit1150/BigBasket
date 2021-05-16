import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() product : any
  id : any
  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(this.product);
    
  }
  getId(){
    console.log(this.product);
    this.id = this.product.id
    this.router.navigate(['/product',this.id]);
    
  }


}
