import { Component, OnInit } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {

  text: string;

  quillEditor: Quill;

  unformattedText: string;

  constructor() { }

  ngOnInit(): void {
  }

  onEditorCreated(editor: Quill): void {
    this.quillEditor = editor;
  }

  displayUnformattedText(): void {
    if (this.quillEditor) {
      this.unformattedText = this.quillEditor.getText();
    } else {
      alert('Something wrong happened! The underlying quill object is not ready yet! :(');
    }
  }

}
