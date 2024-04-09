import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Product, ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ProductListPage implements OnInit {

  productos: Product[] = [];
  productService = inject(ProductsService);

  async ngOnInit() {
    const response = await this.productService.getAll();
    this.productos = response.results;
  }

}
