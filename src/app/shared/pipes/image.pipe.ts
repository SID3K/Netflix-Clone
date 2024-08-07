import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true
})
export class ImagePipe implements PipeTransform {

  transform(url: string, args?: any[]): any {
    // return 'https://image.tmdb.org/t/p/w500/'+url;
    return `https://image.tmdb.org/t/p/w500/${url}`;
  }

}
