import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';


@Pipe({
  name: 'getAbbreviationName'
})
export class GetAbbreviationNamePipe implements PipeTransform {
  transform(user: User): string {
    return UtilService.getAbbreviationName(user?.fullName);
  }
}
