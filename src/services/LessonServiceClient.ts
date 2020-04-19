import {Injectable} from '@angular/core';
import {LESSONS_API_URL_FINDLESSONS, LESSONS_API_URL} from '../common/Constants';


@Injectable()
export class LessonServiceClient {
  findLessonsForModule = moduleId =>
    fetch(`${LESSONS_API_URL_FINDLESSONS}/${moduleId}/lessons`)
      .then(response => response.json())
  findLessonById = (moduleId) =>
    fetch(`${LESSONS_API_URL}/${moduleId}`)
      .then(response => response.json())
}
