import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr1'
})
export class UsdInr1Pipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
  const [price] = args;
    return value*price;

  }

}
