import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  color = 'red';

  changeColor(input): void {
    console.log(input.value);
    this.color = input.value;
    input.value = '';
  }

  constructor() {}

  ngOnInit(): void {}

  processReq(message: any): void {
    alert(message);
  }
}
