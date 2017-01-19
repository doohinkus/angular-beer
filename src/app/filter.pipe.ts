import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(kegs: any, term: any): any {
    if (term === undefined) return kegs;
    return kegs.filter(function(keg){
      return keg.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
