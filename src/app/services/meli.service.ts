import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class MeliService {

  constructor(
    private http:HttpClient
  ) { }

  search(query:string) {
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=" + query).pipe(map((value:any)=>value["results"]))
  }

  getProductById(id:string) {
    return lastValueFrom(this.http.get("https://api.mercadolibre.com/items/" + id))
  }
  
}
