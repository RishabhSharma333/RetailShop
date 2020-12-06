
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',pure:false
})
export class FilterPipe implements PipeTransform {

  transform(map: Map<string, any>, input: string, mode: number): any {
    if (input) {
      if (mode == 1) {
        var ret: any[] = [];
        for (let key of map.keys()) {
          if (key.toLowerCase().indexOf(input.toLowerCase()) >= 0)
            ret.push({ key: key, value: map.get(key) });
        }
        return ret;
      }
      else{
        var ret: any[] = [];
        for (let key of map.keys()) {
          var comp=map.get(key).company;
          if (comp.toLowerCase().indexOf(input.toLowerCase()) >= 0)
            ret.push({ key: key, value: map.get(key) });
        }
        return ret;
      }
    }

    else {
      var ret: any[] = [];
      for (let key of map.keys()) {
        ret.push({ key: key, value: map.get(key)});}
      return ret;
    }
  }
  // value.filter(val=>val.company.toLowerCase().indexOf(input.toLowerCase())>=0);

}
