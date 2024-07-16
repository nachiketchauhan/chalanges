import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doller',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    return '$' + value + ' million';
  }

}
