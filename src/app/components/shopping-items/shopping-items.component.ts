import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {
  
  productList : any;
  
  constructor(private productListService: ProductListService) {
    this.productListService.getProduct().subscribe((response)=>{
      this.productList =  response;
    });
  }
  
  ngOnInit(): void {
  
  }

}
