import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ContentChange} from 'ngx-quill';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomEditorComponent implements OnInit {

  @Input()
  text: string;

  @Output()
  textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onContentChanged(contentChange: ContentChange): void {
    this.textChange.emit(contentChange.html);
  }

}
