import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  imageUrls: string[];
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'iPhone 15 Pro',
      description: 'Apple iPhone 15 Pro with 256GB storage.',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/iphone-15-pro'
    },
    {
      name: 'iPhone 16 Pro Max',
      description: 'Apple iPhone 16 Pro Max 256Gb черный',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large'
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'AirPods 3',
      description: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'Яндекс Станция Лайт 2 фиолетовый',
      description: 'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=preview-large'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'OEM P9 серебристый',
      description: 'Характеристики Наушники OEM P9 серебристый',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=preview-large'
      ],
      rating: 3.5,
      link: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'Yasin 43G11 109 см черный',
      description: 'Характеристики Телевизор Yasin 43G11 109 см черный',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/pab/p74/19867464.jpg?format=gallery-medium'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'Ring Fill Light ZD666',
      description: 'Кольцевая лампа Ring Fill Light ZD666',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/hcb/h71/63867993423902.jpg?format=preview-large'
      ],
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/ring-fill-light-zd666-100129346/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'Fujifilm Instax Mini 20 шт',
      description: 'Фотопленка Fujifilm Instax Mini 20 шт.',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/hd0/h75/86812056846366.png?format=preview-large'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-20-sht-105248732/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'Notestand',
      description: 'Подставка для ноутбука Notestand',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdc/17497973.jpg?format=preview-large'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'Сумка Portcase 9011 черный',
      description: ' Сумка Portcase 9011 черныйк',
      imageUrls: [
         'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=preview-large'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7gsNJ8C2_hDl5MAjJWIMD-Ie&gclid=CjwKCAiAn9a9BhBtEiwAbKg6foz4drKWYijV8yJnKkrMLKTPXJ09lnm8pIkhYOLCINhx4Q2T8wvpPRoCk3QQAvD_BwE'
    },
    {
      name: 'fg',
      description: '1234',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=preview-large'
      ],
      rating:4.5,
      link:'https://kaspi.kz/shop/p/portativnaja-kolonka-bt-speaker-zqs-4239-chernyi-110785723/?c=750000000'
    }
  ]
share(link: string, platform: string) {
  let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    } 
  window.open(url, '_blank');
  }
}
