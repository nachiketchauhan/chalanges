import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mtoh',
  standalone: true
})
export class MtohPipe implements PipeTransform {

  transform(value: string): string {
    const min =Number(value)%60;
    const hrs=(Number(value)-min)/60;
    const finalHTM: string = hrs + 'h ' + min + 'min';
    return finalHTM;
    
  }

}
