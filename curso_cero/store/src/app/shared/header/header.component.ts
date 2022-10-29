import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
  <span>My Store</span>
  </mat-toolbar>`/*This is an inline template (when we don't use a extern HTML file)*/ ,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
