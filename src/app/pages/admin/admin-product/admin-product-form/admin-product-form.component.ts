import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productService: ProductService, private router: Router ) {
    this.productForm = new FormGroup({
      name: new FormControl(''), //FormControl(Giá trị đặc biệt)
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.productForm.value);
    //1. Nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    // 2. Call API
    this.productService.createProduct(data).subscribe(data => {
      // 3. quay lại trang danh sách
      this.router.navigate(['admin', 'products']);
      // 3.1 khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call api
    })
    
  }

}
