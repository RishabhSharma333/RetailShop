import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: string, mode: number): any {
    if (input) {
      if (mode == 1)
        return value.filter(val => val.name.toLowerCase().indexOf(input.toLowerCase()) >= 0);
      else 
      return value.filter(val=>val.company.toLowerCase().indexOf(input.toLowerCase())>=0);
    }
    else {
      return value;
    }
  }

}
