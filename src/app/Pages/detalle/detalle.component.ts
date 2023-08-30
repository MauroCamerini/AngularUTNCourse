import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeliService } from 'src/app/services/meli.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  product:any
  loading:boolean = true
  errorMessage:string = ""

  constructor(
    private activatedRoute:ActivatedRoute,
    private meliService:MeliService
  ) {
    const id:any = this.activatedRoute.snapshot.paramMap.get("id")

    this.meliService.getProductById(id).then((res)=>{
      this.product=res
      
    }).catch((e)=>{
      this.errorMessage = e.message
    }).finally(()=>{
      this.loading=false
    })
   }

  ngOnInit(): void {
  }

}
