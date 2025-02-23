import { Component } from '@angular/core';
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductItemComponent, ProductListComponent]
})
export class AppComponent {
  categories = ['Electronics', 'Clothing', 'Books', 'Home Appliances'];
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
