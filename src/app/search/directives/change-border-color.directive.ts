import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DateBorderColors } from 'app/search/models/date-border-colors';

@Directive({
  selector: '[appChangeBorderColor]',
  standalone: true,
})
export class ChangeBorderColorDirective implements OnInit {
  constructor(private element: ElementRef<HTMLDivElement>) {}

  @Input() appChangeBorderColor = DateBorderColors.error;

  private setClassByDate() {
    const now = new Date(2019, 9, 29, 16, 0, 14); // use past date for mocked data
    const week = new Date(1970, 0, 7);
    const month = new Date(1970, 1);
    const halfYear = new Date(1970, 6);
    const publishedAt = new Date(this.appChangeBorderColor);
    const diff = new Date(+now - +publishedAt);

    if (diff < week) {
      this.appChangeBorderColor = DateBorderColors.info;
    } else if (diff < month) {
      this.appChangeBorderColor = DateBorderColors.success;
    } else if (diff < halfYear) {
      this.appChangeBorderColor = DateBorderColors.warning;
    } else {
      this.appChangeBorderColor = DateBorderColors.error;
    }
  }

  ngOnInit() {
    this.setClassByDate();
    this.element.nativeElement.classList.add(this.appChangeBorderColor);
  }
}
