import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  getProducts(): Array<Product> {
    return [
      {
        id: 0,
        name: "product name",
        imageUrl: '/assets/img/product-1.jpg',
        price: 100
      },
      {
        id: 1,
        name: "product name",
        imageUrl: "/assets/img/product-2.jpg",
        price: 100
      },
      {
        id: 2,
        name: "product name",
        imageUrl: "/assets/img/product-3.jpg",
        price: 100
      },
      {
        id: 3,
        name: "product name",
        imageUrl: "/assets/img/product-4.jpg",
        price: 100
      },
      {
        id: 4,
        name: "product name",
        imageUrl: "/assets/img/product-5.jpg",
        price: 100
      },
      {
        id: 5,
        name: "product name",
        imageUrl: "/assets/img/product-6.jpg",
        price: 100
      },
      {
        id: 6,
        name: "product name",
        imageUrl: "/assets/img/product-7.jpg",
        price: 100
      },
      {
        id: 7,
        name: "product name",
        imageUrl: "/assets/img/product-8.jpg",
        price: 100
      },

    ];
  }
}
