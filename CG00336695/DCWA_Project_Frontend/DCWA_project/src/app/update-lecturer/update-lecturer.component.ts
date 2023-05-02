import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lecturer } from '../lecturer/lecturer.model';
import { LecturerService } from '../lecturer/lecturer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-lecturer',
  templateUrl: './update-lecturer.component.html',
  styleUrls: ['./update-lecturer.component.css']
})
export class UpdateLecturerComponent implements OnInit {
  
  lecturerLid!: string;
  lecturer!: Lecturer;

  constructor(private router: Router, private route: ActivatedRoute,     private lecturerService: LecturerService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lecturerLid = params.get('id')!;
      this.getLecturerDetails();
      // Use the lecturerLid to fetch the lecturer details and update the component
    });
  }

  
  getLecturerDetails(): void {
   
    this.lecturerService.getLecturer(this.lecturerLid).subscribe(
      (lecturer: Lecturer) => {
        this.lecturer = lecturer;
      },
      (error) => {
        console.error('Error fetching lecturer details:', error);
      }
    );
  }

  
  updateLecturer(): void {
    this.lecturerService.updateLecturer(this.lecturerLid, this.lecturer).subscribe(
      (updatedLecturer: Lecturer) => {
        console.log('Lecturer updated:', updatedLecturer);
        this.router.navigate(['/lecturers']);
      },
      (error: any) => {
        console.error('Error updating lecturer:', error);
      }
    );
  }

}