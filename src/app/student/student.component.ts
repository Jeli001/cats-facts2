import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-student',
  templateUrl: '../student/student.component.html',
  styleUrls: ['../student/student.component.css'],
  providers: [StudentService],

})
export class StudentComponent implements OnInit {


  ngOnInit() {
    this.studentService.getStudentById(9781617294136);
  }

  constructor(private studentService: StudentService) {
    this.student1 = this.studentService.getStudent(1);
    this.student2 = this.studentService.getStudent(2);


  }
  student1: Student = new Student;
  student2: Student;
  students: Student[] = [];

  fillStudents() {
    this.students.push(this.student1);
    this.students.push(this.student2);
  }





}

