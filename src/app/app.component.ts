import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-form';
  backgroundColor = 'red';
  show = 'true';
  // changeStatus(): void {
  //   this.show = !this.show;
  // }
}
