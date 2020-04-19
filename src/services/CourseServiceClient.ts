import {Injectable} from '@angular/core';
import {COURSES_API_URL} from '../common/constants';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch(COURSES_API_URL)
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`${COURSES_API_URL}/${courseId}`)
      .then(response => response.json())
}
