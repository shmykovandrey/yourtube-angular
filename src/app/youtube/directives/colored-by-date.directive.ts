import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColoredByDate]',
})
export default class ColoredByDateDirective implements OnInit {
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  @Input('appColoredByDate') cardData: string | undefined = '';

  ngOnInit(): void {
    const nowDate: Date = new Date();
    const cardDate: Date = new Date(this.cardData as string);
    const ageInDays: number = Math.trunc(
      (nowDate.valueOf() - cardDate.valueOf()) / (1000 * 3600 * 24),
    );
    if (ageInDays <= 6) {
      this.renderer.setStyle(this.elem.nativeElement, 'border-bottom', '4px solid blue');
      return;
    }
    if (ageInDays <= 30) {
      this.renderer.setStyle(this.elem.nativeElement, 'border-bottom', '4px solid green');
      return;
    }
    if (ageInDays <= 30 * 6) {
      this.renderer.setStyle(this.elem.nativeElement, 'border-bottom', '4px solid yellow');
      return;
    }
    this.renderer.setStyle(this.elem.nativeElement, 'border-bottom', '4px solid red');
  }
}
