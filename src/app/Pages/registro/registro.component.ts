import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) {
    this.myForm = this.fb.group({
      firstname: ["", [Validators.required] ],
      lastname: ["", [Validators.required] ],
      phone: ["", [Validators.required] ],
      email: ["", [Validators.email, Validators.required] ],
      password: ["", [Validators.minLength(6), Validators.required]]
    })
   }
   
  login(){
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}
