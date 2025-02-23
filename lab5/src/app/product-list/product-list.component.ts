import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


interface Product {
  name: string;
  description: string;
  imageUrls: string[];
  rating: number;
  link: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input() category!: string;
  products: Product[] = [];

  allProducts: Record<string, Product[]> = {
    'Техника': [
      { name: 'Umiio S24 ULTRA 10.1 дюйм 16 Гб/512 Гб черный', description: 'Характеристики Планшет Umiio S24 ULTRA 10.1 дюйм 16 Гб/512 Гб черный', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h19/h0b/86180659036190.jpg?format=preview-large'], rating: 4.7, link: 'https://kaspi.kz/shop/p/umiio-s24-ultra-10-1-djuim-16-gb-512-gb-chernyi-119999371/?c=750000000', likes: 125 },
      { name: 'LINEUP i5-12400F/ RTX 4060/ 32GB/ SSD 1024 Гб/ Win 11 Pro', description: 'Характеристики LINEUP i5-12400F/ RTX 4060/ 32GB/ SSD 1024 Гб/ Win 11 Pro', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h6d/had/84497680269342.jpg?format=gallery-medium'], rating: 5, link: 'https://kaspi.kz/shop/p/lineup-newcomponents2-chernyi-114538061/?c=750000000', likes: 186 },
      { name: 'МФУ Epson L3251', description: 'Характеристики МФУ Epson L3251', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/h18/86368650166302.png?format=preview-large'], rating: 5, link: 'https://kaspi.kz/shop/p/mfu-epson-l3251-108634987/?c=750000000', likes: 362 },
    ],
    'Одежда': [
      { name: 'Сарафан черный', description: 'Черный', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/pab/p1a/19467902.jpg?format=preview-large'], rating: 4.5, link: 'https://kaspi.kz/shop/p/sarafan-30295090-110067001-chernyi-44-123067288/?c=750000000&hasVariants=true', likes: 443 },
      { name: 'Футболка Skims черный', description: 'Футболка Skims черный.', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/p91/pc9/26809193.jpeg?format=preview-large'], rating: 4.6, link: 'https://kaspi.kz/shop/p/futbolka-skims-chernyi-15255121b/?c=750000000', likes: 58 },
      { name: 'Футболка Adidas', description: 'Белый', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h33/h4a/85117471588382.jpg?format=preview-large'], rating: 4.3, link: 'https://kaspi.kz/shop/p/futbolka-adidas-belyi-116476836/?c=750000000', likes: 7 },
      
    ],
    'Товары для дома': [
      { name: 'Детские влажные салфетки Yokosun ', description: 'Детские влажные салфетки Yokosun Детские Eco 100 шт.', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/ha0/h1e/84702784454686.jpg?format=gallery-medium'], rating: 4.7, link: 'https://kaspi.kz/shop/p/detskie-vlazhnye-salfetki-yokosun-detskie-eco-100-sht-100623551/?c=750000000', likes: 128 },
      { name: 'Диффузор Eyfel', description: 'Диффузор Eyfel Манго 55 мл', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h07/h18/64381337206814.jpg?format=preview-large'], rating: 4.9, link: 'https://kaspi.kz/shop/p/eyfel-mango-55-ml-104206537/?c=750000000', likes: 380 },
      { name: 'Щетка', description: 'Щетка-скребок для удаления шерсти, катышков и чистка ковров бежевы', imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h7d/84786536677406.jpg?format=gallery-medium'], rating: 5, link: 'https://kaspi.kz/shop/p/schetka-schetka-skrebok-dlja-udalenija-shersti-katyshkov-i-chistka-kovrov-bezhevyi-106702390/?c=750000000', likes: 1052 },
      
    ]
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category']) {
      this.products = this.allProducts[this.category] || [];
    }
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}

