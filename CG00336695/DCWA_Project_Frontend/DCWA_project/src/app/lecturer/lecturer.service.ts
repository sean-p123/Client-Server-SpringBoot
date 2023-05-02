import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecturer } from './lecturer.model';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  private apiUrl = 'http://localhost:8080/lecturers'; // Replace with your API URL
  private baseUrl = 'http://localhost:8080';
  private updateUrl = 'http://localhost:8080/updateLecturer';
  constructor(private http: HttpClient) { }

  getLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(this.apiUrl);
  }


  getLecturer(id: string): Observable<Lecturer> {
    return this.http.get<Lecturer>(`${this.baseUrl}/lecturer/${id}`, {responseType: 'json'});
  }


  getAllLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>( 'http://localhost:8080/allLecturers');
  }

  getLecturerById(id: number): Observable<Lecturer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Lecturer>(url);
  }

  createLecturer(lecturer: Lecturer): Observable<Lecturer> {
    return this.http.post<Lecturer>(this.apiUrl, lecturer);
  }

  updateLecturer(lid:string, lecturer: Lecturer): Observable<Lecturer> {
    const url = `${this.updateUrl}/${lecturer.id}`; // Adjust the URL according to your API

    return this.http.put<Lecturer>(url, lecturer);
  }

  deleteLecturer(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}