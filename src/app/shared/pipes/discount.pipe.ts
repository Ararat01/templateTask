import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, discountPer: number, ...args: unknown[]): string {
    return ((value / 100)*(100 - discountPer)).toFixed(2);
  }

}
