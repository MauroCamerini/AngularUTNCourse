import { Component, OnInit } from '@angular/core';
import { MeliService } from '../../services/meli.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any[] = []
  loading:boolean = true
  errorMessage:string = ""

  constructor(
    private meliService:MeliService
  ) { 
    this.meliService.search("audi").subscribe({
      next: (data:any[]) => {
        this.products = data.slice(0,4)
        this.loading=false
    },
      error: (e:Error)=>{
        this.errorMessage = e.message
        this.loading = false
      }
  })
  }
    
  

  ngOnInit(): void {
  }

}
