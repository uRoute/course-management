import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _HttpClient: HttpClient) { }

  getCourses():Observable<any> {
    return this._HttpClient.get('https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/courses');
  }

  getCourse(courseId: string):Observable<any> {
    return this._HttpClient.get(`https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/courses/${courseId}`);
  }


  addCourse(courseData: object): Observable<any> {
    return this._HttpClient.post('https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/courses', courseData);
  }

  removeCourse(courseId: string): Observable<any> {
    return this._HttpClient.delete(`https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/courses/${courseId}`);
  }

  updateCourse(courseId: string, courseData: object): Observable<any> {
    return this._HttpClient.put(`https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/courses/${courseId}`, courseData);
  }
}
