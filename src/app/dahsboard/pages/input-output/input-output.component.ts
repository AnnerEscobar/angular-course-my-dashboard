import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../../interfaces/product';
import { interval, take, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-output',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './input-output.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {


  public products = signal<Product[]>([

    { id: 1, name: 'Product 1', quantity: 0 },
    { id: 2, name: 'Product 2', quantity: 0 },

  ])

  private internalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 0
          }
        ])
      }),
      take(7)
    ).subscribe();


  ngOnDestroy() {
    this.internalSubscription.unsubscribe();
  }

  public updateProduct(product: Product, quantity: number) {
    this.products.update((products) =>
      products.map((p) =>
        p.id === product.id ? { ...p, quantity } : p
      )
    );
  }


}
