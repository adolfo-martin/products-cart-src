import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from './product';


@Injectable({
    providedIn: 'root'
})
export class MockArrayProductsRepository {
    static products: Product[] = [
        new Product('0000-0001', 'Ratón Logitech', 19.90),
        new Product('0000-0002', 'Teclado Logitech', 24.95),
        new Product('0000-0003', 'Monitor LG 4K IPS', 349.90),
    ]

    retrieveProducts$(): Observable<Product[]> {
        return of(MockArrayProductsRepository.products).pipe(
            delay(1500)
        )
    }

    retrieveProductByUuid$(uuid: string): Observable<Product | undefined> {
        return of(
            MockArrayProductsRepository.products
                .find(product => product.uuid === uuid)
        ).pipe(
            delay(1500)
        )
    }
}
