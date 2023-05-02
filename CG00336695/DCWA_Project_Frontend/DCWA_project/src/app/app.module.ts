import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/student.service';
import { LecturerComponent } from './lecturer/lecturer.component';
import { UpdateLecturerComponent } from './update-lecturer/update-lecturer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LecturerComponent,
    StudentComponent,
    UpdateLecturerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
