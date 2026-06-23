import { Component, inject } from '@angular/core';
import { CoursesService } from '../../../shared/services/courses.service';
import { Course } from '../../../core/interfaces/course';
import { CurrencyPipe, DatePipe } from '@angular/common'; // 1. Import the pipe
import { FormsModule } from '@angular/forms'
import { SearchPipe } from '../../../shared/pipes/search.pipe';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  imports: [ NgxPaginationModule ,CurrencyPipe,DatePipe,FormsModule,SearchPipe,RouterLink ], // 2. Add the pipe to the imports array
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private _CoursesService = inject(CoursesService);
  allCourses:Course[] = [];
  searchText: string = '';
  p: number = 1;
  ngOnInit(): void {
    this._CoursesService.getCourses().subscribe({
      next: (res) => {
        console.log(res);
        this.allCourses = res;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
