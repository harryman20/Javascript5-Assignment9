import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-list-helper';

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {

  transform(contentList: Content[], type: string): any {
    return contentList ? contentList.filter(c => c.type != null ? c.type === type : null) : [];
  }

}
