import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sharedPipe'
})
export class SharedPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
