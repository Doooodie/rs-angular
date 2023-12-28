import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {}
