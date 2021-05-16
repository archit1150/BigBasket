import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private Url: string = "assets/template/db.json"
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get(this.Url);
  }
}
