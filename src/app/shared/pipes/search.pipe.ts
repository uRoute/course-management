import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../core/interfaces/course';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:Course[] , searchText: string): Course[] {
    return data.filter((course) => course.course_id.includes(searchText));
  }

}
