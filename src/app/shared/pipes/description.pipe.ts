import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})

export class DescriptionPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    // return value.substring(0,140)+'...'; //one way to do it
    if(args==null) args=140;
    return `${value.substring(0,args)}...`;  //string literals anta
  }

}
