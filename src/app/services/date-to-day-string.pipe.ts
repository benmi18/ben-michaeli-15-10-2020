import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateToDayString' })
export class DateToDayStringPipe implements PipeTransform {
  transform(date: string): any {
    return moment(date).format('ddd');
  }
}
