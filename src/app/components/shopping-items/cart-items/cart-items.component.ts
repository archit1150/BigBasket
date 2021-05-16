import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  qty : number
  deliveryCharges : number
  productList: any
  id: any
  productName: string
  productDesc: string
  productPrice: number
  productImg: string
  productCatagory: string
  productQuantity: number
  itemPrice: number
  totalPrice: number
  cartItem: Product[]
  constructor( private router: Router , private productListService: ProductListService, private route: ActivatedRoute) { 
    this.productListService.getProduct().subscribe((response)=>{
      this.productList =  response;
      this.id = this.route.snapshot.paramMap.get('id');
      for(let i =0; i<= this.productList.product.length; i++){
        if(this.productList.product[i].id === this.id){
          this.productName = this.productList.product[i].name
          this.productDesc = this.productList.product[i].description
          this.productPrice = parseInt(this.productList.product[i].price)
          this.productImg = this.productList.product[i].img
          this.productCatagory = this.productList.product[i].catagory
          this.productQuantity = this.productList.product[i].quantity
          this.qty = 1
          this.deliveryCharges = 10
          this.itemPrice = this.productPrice
          this.totalPrice = this.itemPrice + this.deliveryCharges
        
        }
      }
        })
    
    }

  ngOnInit(): void {

  }
qtyMinus(){
  this.qty = this.qty -1
  this.itemPrice-= this.productPrice
  this.totalPrice-= this.productPrice
}
qtyPlus(){
  this.qty = this.qty +1
  this.itemPrice+= this.productPrice
  this.totalPrice+= this.productPrice
}
checkout(){
  this.router.navigate(['/userDetails'])
}
}
