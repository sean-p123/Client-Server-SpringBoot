import { Component, OnInit } from '@angular/core';
import { Lecturer } from './lecturer.model';
import { LecturerService } from './lecturer.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  
  
  lecturers: Lecturer[] = [];
  selectedLecturer: Lecturer | null = null;

  baseUrl: string = 'http://localhost:8080/lecturer';
  constructor(private lecturerService: LecturerService, private http: HttpClient
    , private router: Router) { }

  ngOnInit(): void {
   this.getAllLecturers();
   
}

  getLecturers(): void {
    this.lecturerService.getLecturers().subscribe(
      (data: Lecturer[]) => {
        this.lecturers = data;
      },
      (error) => {
        console.error('Error fetching lecturers:', error);
      }
    );
  }

  getAllLecturers(): void {
    this.lecturerService.getAllLecturers().subscribe(
      (data: Lecturer[]) => {
        this.lecturers = data;
      },
      (error) => {
        console.error('Error fetching lecturers:', error);
      }
    );
  }

 
  updateLecturer(lecturer: Lecturer): Observable<Lecturer> {
    console.log("update method");
    this.getLecturerDetails(lecturer.lid)
    const url = `${this.baseUrl}/${lecturer.id}`;
    return this.http.put<Lecturer>(url, lecturer);
  }

  getLecturerDetails(lecturerLid: string): void {
    console.log(lecturerLid);
    this.lecturerService.getLecturer(lecturerLid).subscribe(
      (lecturer: Lecturer) => {
        this.selectedLecturer = lecturer;
        this.router.navigate(['/updateLecturer',lecturer.lid]);
      },
      (error) => {
        console.error('Error fetching lecturer details:', error);
      }
    );
  }


}

