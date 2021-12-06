import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Student }    from './student';


@Injectable()
export class StudentService {

    constructor(private http:HttpClient) { }
 
      configUrl= "https://api.itbook.store/1.0/books/";

    
    getStudentById(id:number): Observable<Student>{
       // return this.http.get<Student>(this.configUrl);
       return this.http.get<any>(this.configUrl);
    }
    
    getStudent(id: number): Student {
        let student: Student = new Student;
        if (id === 1) {
          student.firstName = "Jyn";
          student.lastName  = "Erso";
        } else if (id === 2) {
          student.firstName = "Frodo";
          student.lastName  = "Baggins";
        }
        return student;
      }

    



}
