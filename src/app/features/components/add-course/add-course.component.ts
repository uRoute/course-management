import { Component, inject } from '@angular/core';
import { CoursesService } from '../../../shared/services/courses.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-course',
  imports: [ReactiveFormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  private dateToday = new Date().toString();
  private _CoursesService = inject(CoursesService);
  private _Router = inject(Router);
  private _ToastrService = inject(ToastrService);
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


  addCourse(courseForm:FormGroup){
    if(courseForm.valid){
      this._CoursesService.addCourse(courseForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          this._ToastrService.success('Course added successfully');
          // this._Router.navigate(['/home']);
        }
      })
    }
  }

}
