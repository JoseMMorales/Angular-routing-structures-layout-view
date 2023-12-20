import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  goBack(): void {
    this.location.back();
  }
}
