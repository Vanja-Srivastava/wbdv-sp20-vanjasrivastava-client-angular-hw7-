import {Injectable} from '@angular/core';
import {MODULES_API_URL_FINDMODULE, MODULES_API_URL} from '../common/constants';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(`${MODULES_API_URL_FINDMODULE}/${courseId}/modules`)
      .then(response => response.json())

  findModuleById = (moduleId) =>
    fetch(`${MODULES_API_URL}/${moduleId}`)
      .then(response => response.json())
}
