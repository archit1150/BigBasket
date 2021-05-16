import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/service/message.service';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  productList: any
  productId: string
  productName: string
  productDesc: string
  productPrice: number
  productImg: string
  productCatagory: string
  productQuantity: number
  id: any
  constructor(private productListService: ProductListService, private route: ActivatedRoute, 
    private router: Router) {
    this.productListService.getProduct().subscribe((response)=>{
      this.productList =  response;
      this.id = this.route.snapshot.paramMap.get('id');
      this.productId = this.id;
      console.log("view--->",this.productList.product.length);
      for(let i =0; i<= this.productList.product.length; i++){
        if(this.productList.product[i].id === this.productId){
          console.log(this.productName = this.productList.product[i].name)
          this.productDesc = this.productList.product[i].description
          this.productPrice = parseInt(this.productList.product[i].price)
          this.productImg = this.productList.product[i].img
          this.productCatagory = this.productList.product[i].catagory
          this.productQuantity = this.productList.product[i].quantity
 
        }
      }
    });
   }

  ngOnInit(): void {

  }
 addToCart(){
  this.router.navigate(['/cart',this.id]);
 }
}
