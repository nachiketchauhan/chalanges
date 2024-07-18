import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doller',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string): string {
  //   console.log(Number(value)/83);
  //  const v1= Number(value)/83
  //  const currency= Math.round(v1 * 100) / 100;
  //  console.log(currency);
    return '$' + value+ ' million';
  }

}
