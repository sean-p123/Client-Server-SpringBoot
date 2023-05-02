import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { StudentComponent } from './student/student.component';
import { UpdateLecturerComponent } from './update-lecturer/update-lecturer.component';

const routes: Routes = [ { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeScreenComponent },
{ path: 'lecturer', component: LecturerComponent },
{ path: 'lecturers/:id', component: LecturerComponent },
{ path: 'updateLecturer/:id', component: UpdateLecturerComponent},
{ path: 'student', component: StudentComponent },
{path: 'allLecturers', component: LecturerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

