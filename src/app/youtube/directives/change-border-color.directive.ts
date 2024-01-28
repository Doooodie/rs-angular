import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DateBorderColors } from 'app/youtube/models/date-border-colors.model';

@Directive({
  selector: '[appChangeBorderColor]',
  standalone: true,
})
export class ChangeBorderColorDirective implements OnInit {
  constructor(private element: ElementRef<HTMLDivElement>) {}

  private borderColor: `${DateBorderColors}` = 'border-error';
  @Input() appChangeBorderColor = '';

  private setClassByDate() {
    const now = new Date(2019, 9, 29, 16, 0, 14); // use past date for mocked data
    const week = new Date(1970, 0, 7);
    const month = new Date(1970, 1);
    const halfYear = new Date(1970, 6);
    const publishedAt = new Date(this.appChangeBorderColor);
    const diff = new Date(+now - +publishedAt);

    if (diff < week) {
      this.borderColor = DateBorderColors.info;
    } else if (diff < month) {
      this.borderColor = DateBorderColors.success;
    } else if (diff < halfYear) {
      this.borderColor = DateBorderColors.warning;
    } else {
      this.borderColor = DateBorderColors.error;
    }
  }

  ngOnInit() {
    this.setClassByDate();
    this.element.nativeElement.classList.add(this.borderColor);
  }
}
