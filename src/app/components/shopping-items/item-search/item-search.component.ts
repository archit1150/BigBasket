import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/service/product-list.service';
import { LoginComponent } from '../../user/login/login.component';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  products : any
  searchProduct: any
  productList: any
  productName: string
  productDesc: string
  productPrice: number
  productImg: string
  productCatagory: string
  productQuantity: number
  constructor(private route: ActivatedRoute, private productListService: ProductListService ) { 
    let name = this.route.snapshot.paramMap.get('name');
    this.productName = name;
    this.productListService.getProduct().subscribe((response)=>{
      this.productList =  response;
      console.log(this.productList);
      

      for(let i =0; i<= this.productList.product.length; i++){
        if(this.productList.product[i].name === this.productName){
          console.log(this.productName = this.productList.product[i].name)
          this.productDesc = this.productList.product[i].description
          this.productPrice = parseInt(this.productList.product[i].price)
          this.productImg = this.productList.product[i].img 

    
  }
}
})
  }

  ngOnInit(): void {
  }

}
