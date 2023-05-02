import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { error } from 'console';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  
  students: Student[] = [];

  constructor(private studentService: StudentService){

  }

  ngOnInit(): void {
      this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudentList().subscribe(
      (students: Student[]) => {
        this.students = students;
      }, 
      (error : any) => {
        console.error('Error fetching students:', error);
      }
    )
  }

  deleteStudent(id: string): void {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        console.log('Student deleted successfully');
        // Refresh the students list after deletion
        this.getStudents();
      },
      (error) => {
        console.error('Error deleting student:', error);
      }
    );
  }

}

 