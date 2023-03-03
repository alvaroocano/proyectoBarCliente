import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReservas'
})
export class FilterReservasPipe implements PipeTransform {

    transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultReservas = [];
    for (const reserva of value) {
      if (reserva.fecha.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultReservas.push(reserva);
      };
    };
    return resultReservas;
  }

}
