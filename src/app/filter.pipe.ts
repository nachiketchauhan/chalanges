import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(
    value: Movie[],
    title: string,
    releaseYear: number | undefined
  ): Movie[] {
    
    const tempValue = [...value];
    let filteredValue: Movie[] = [];
  
    if (
      (title == '' || title == undefined || !title) &&
      (!releaseYear || releaseYear === undefined || releaseYear === null)
    ) {
      return value;
    }

   
    if (title && releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return (
          val.title.toLowerCase().includes(title.toLowerCase()) &&
          val.release_date.includes(String(releaseYear))
        );
      });
      return filteredValue;
    }

   
    if (title) {
      filteredValue = tempValue.filter((val) => {
        return val.title.toLowerCase().includes(title.toLowerCase());
      });
    }

    
    if (releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return val.release_date.includes(String(releaseYear));
      });
    }
    return filteredValue;
  }

}
