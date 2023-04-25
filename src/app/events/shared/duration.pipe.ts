import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return '30 min';
      case 2:
        return '1 ora';
      case 3:
        return 'Mezza giornata';
      case 4:
        return 'Tutto il dì';
      default:
        return value.toString();
    }
  }
}
