import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-css',
  templateUrl: './custom-css.component.html',
  styleUrls: ['./custom-css.component.css']
})
export class CustomCssComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit(): void {
    this.text = '<p>Inserted some text here just to see what happens!</p>';
  }

}
