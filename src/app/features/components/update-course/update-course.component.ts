import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoursesService } from '../../../shared/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-course',
  imports: [ReactiveFormsModule],
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent {
  
  private dateToday = new Date().toString();
  private _CoursesService = inject(CoursesService);
  private _Router = inject(Router);
  private _ToastrService = inject(ToastrService);
  private _ActivatedRoute = inject(ActivatedRoute)
  courseId:string | null = null;

  ngOnInit(){
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.courseId = param.get('courseId')
      }
    })
  }

  courseForm:FormGroup = new FormGroup({
    courseName: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    instructorName: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required,Validators.min(16)]),
    duration: new FormControl(null,[Validators.required,Validators.min(1)]),
    price: new FormControl(null,[Validators.required,Validators.min(0)]),
    status:new FormControl(null,[Validators.required,Validators.min(0)]),
    createdDate: new FormControl(this.dateToday),
    description: new FormControl(null,[Validators.minLength(0),Validators.maxLength(500)]),
  })


  updateCourse(courseForm:FormGroup){
    if(courseForm.valid){
      this._CoursesService.updateCourse(this.courseId! , courseForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          this._ToastrService.success('Course Updated successfully');
          this._Router.navigate(['/home']);
        }
      })
    }
  }


}
