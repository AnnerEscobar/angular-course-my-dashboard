import { ChangeDetectionStrategy, Component, input, output, } from '@angular/core';
import { Product } from '../../../../../interfaces/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  public product = input.required<Product>();
  public onincrementQuiantity = output<number>();


  public incrementQuiantity():void {
    this.onincrementQuiantity.emit(this.product().quantity + 1);
  }

}
