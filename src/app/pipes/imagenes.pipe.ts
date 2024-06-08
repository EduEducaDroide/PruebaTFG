import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes',
})
export class ImagenesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 0) {
      return value;
    } else {
      return 'https://cdn-icons-png.flaticon.com/512/758/758971.png';
    }
  }
}
