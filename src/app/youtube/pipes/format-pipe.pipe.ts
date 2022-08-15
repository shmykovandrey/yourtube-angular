import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPipe',
})
export default class FormatPipePipe implements PipeTransform {
  transform(value: string): unknown {
    if (+value < 11) return `   ${value}`;
    if (+value < 101) return `  ${value}`;
    if (+value < 1001) return ` ${value}`;
    if (+value < 10001) return `${value}`;
    if (+value < 100001) return `  ${Math.trunc(+value / 1000)}k`;
    if (+value < 1000001) return ` ${Math.trunc(+value / 1000)}k`;
    if (+value < 10000001) {
      const mil: number = Math.trunc(+value / 1000000);
      return `${mil},${Math.trunc((+value - mil * 1000000) / 100000)}m`;
    }
    if (+value < 10000001) return ` ${Math.trunc(+value / 1000000)}m`;
    return null;
  }
}
