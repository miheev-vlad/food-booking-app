import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
})
export class TruncateTextPipe implements PipeTransform {
  transform(inputString: string, truncateLength: number): string {
    if (inputString.trim().length <= truncateLength) {
      return inputString;
    }
    return `${inputString.slice(0, truncateLength)}...`;
  }
}
