import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Milk' },
    { id: 2, name: 'Biscuits' },
    { id: 3, name: 'Water' },
  ];

  constructor(private router: Router) {}

  navigateToProduct(id: any) {
    this.router.navigate(['products', id]);
  }
}
