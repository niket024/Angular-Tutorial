import { Component, OnInit } from '@angular/core';  
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { ProductsService } from '../products.service';  

@Component({  
  selector: 'app-product-add',  
  templateUrl: './product-add.component.html',  
  styleUrls: ['./product-add.component.css']  
})  
export class ProductAddComponent implements OnInit {  
  angForm: FormGroup  ;  
  constructor(private fb: FormBuilder, private ps: ProductsService) {  
    this.angForm =this.createForm();  
  }  
  createForm(): FormGroup {  
    this.angForm = this.fb.group({  
      ProductName: ['', Validators.required ],  
      ProductDescription: ['', Validators.required ],  
      ProductPrice: ['', Validators.required ]  
    });  
    return this.angForm;
  }  

  addProduct(ProductName:string, ProductDescription:string, ProductPrice:number) {  
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice);  
  }  
  ngOnInit() {  
  }  
}  