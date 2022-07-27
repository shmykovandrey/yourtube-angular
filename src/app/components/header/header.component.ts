import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  @Output() changeFilterEvent = new EventEmitter();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  changeFilterStateChild(): void {
    console.log('child+');
    this.changeFilterEvent.emit();
  }

  inputValue?: string;

  onClick(): void {
    // @Output() isFilterOn = true;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
}
