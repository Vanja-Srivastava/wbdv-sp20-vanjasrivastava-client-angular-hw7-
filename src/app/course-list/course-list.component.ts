import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  title = 'Course List Component'

  courses = []

  newCourseTitle = ''

  constructor(private service: CourseServiceClient ) { }

  createCourse = () => {
    this.courses.push({_id: Math.random(), title: this.newCourseTitle});
  }

  deleteCourse = (courseToDel) => {
    this.courses = this.courses.filter(course => course !== courseToDel);
  }
  ngOnInit(): void {
    this.service.findAllCourses().then(courses => this.courses = courses);
  }

}

