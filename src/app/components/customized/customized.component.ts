import { Component, OnInit } from '@angular/core';
import Quill from 'quill';

const customToolbarModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown

    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

    [{ color: [] }, { background: [] }],          // dropdown with defaults from theme

    ['blockquote'],

    [{ list: 'ordered'}, { list: 'bullet' }],
    [{ script: 'sub'}, { script: 'super' }],      // superscript/subscript
    [{ indent: '-1'}, { indent: '+1' }],          // outdent/indent

    [{ font: [] }],
    [{ align: [] }],

    ['clean'],                                         // remove formatting button

    ['link']                         // link
  ]
};

const normalToolbarModules = { // Just for references
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }],               // custom button values
    [{ list: 'ordered'}, { list: 'bullet' }],
    [{ script: 'sub'}, { script: 'super' }],      // superscript/subscript
    [{ indent: '-1'}, { indent: '+1' }],          // outdent/indent
    [{ direction: 'rtl' }],                         // text direction

    [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video
  ]
};

@Component({
  selector: 'app-customized',
  templateUrl: './customized.component.html',
  styleUrls: ['./customized.component.css']
})
export class CustomizedComponent implements OnInit {

  text: string;

  quillEditor: Quill;

  unformattedText: string;

  modules = customToolbarModules;

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
