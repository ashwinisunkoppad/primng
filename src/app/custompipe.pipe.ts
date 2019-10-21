import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, before: string, ): string {
    let newStr = `${before} ${value} `;
    return newStr;
  }
}

