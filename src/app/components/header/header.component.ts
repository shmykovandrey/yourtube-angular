import { Component } from '@angular/core';
import mochResponse from 'src/app/moch-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  inputValue?: string;

  onClick(): void {
    console.log(this.inputValue);
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
}
