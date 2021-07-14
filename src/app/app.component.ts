import { Component } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;

  quillEditor: Quill;

  unformattedText: string;

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
