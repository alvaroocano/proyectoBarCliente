import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultRestaurantes = [];
    for (const restaurante of value) {
      if (restaurante.localidad.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultRestaurantes.push(restaurante);
      };
    };
    return resultRestaurantes;
  }
}


