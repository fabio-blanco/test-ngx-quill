import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-view',
  templateUrl: './custom-view.component.html',
  styleUrls: ['./custom-view.component.css']
})
export class CustomViewComponent implements OnInit {

  @Input()
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
