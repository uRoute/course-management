import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../shared/services/courses.service';
import { Course } from '../../../core/interfaces/course';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course',
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  private _ActivatedRoute = inject(ActivatedRoute)
  private _CoursesService = inject(CoursesService)
  private _Router = inject(Router)
  private _ToastrService = inject(ToastrService);

  courseId:string | null = null;
  courseData!:Course ;
  ngOnInit(){
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.courseId = params.get('courseId');  
      }
    })


    this._CoursesService.getCourse(this.courseId!).subscribe({
      next: (res) => {
        this.courseData = res;
      },
      error: (err) => {
        console.log(err);
      }
    })

  }


  removeCourse(courseId:string){
    this._CoursesService.removeCourse(courseId).subscribe({
      next: (res) => {
        console.log(res);
        this._Router.navigate(['/home']);
        this._ToastrService.info('Course removed successfully');

      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
