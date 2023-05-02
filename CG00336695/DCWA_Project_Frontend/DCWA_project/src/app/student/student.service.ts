import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getStudents(sid: string): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}