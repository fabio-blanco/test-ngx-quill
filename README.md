# Angular + ngx-quill sample project #

This project is a simple Sample on how to use Quill editor in an Angular app.

## About Angular ##

Angular is a web front-end framework lead by the Angular team from Google.

See [https://angular.io/](https://angular.io/)

## About Quill ##

[Quill](https://quilljs.com/) is a free, open source WYSIWYG editor built for the modern 
web. It is not an Angular module so, in order to use it in Angular apps, there is a 
wrapper module called ngx-quill.

## About ngx-quill ##

[Ngx-quill](https://github.com/KillerCodeMonkey/ngx-quill) is an angular (>=2) module 
for the Quill Rich Text Editor containing all components to use it.

## How To ##

In order to use PrimeNG the first thing is to create an Angular project (workspace). You can do it on
the terminal using [Angular Cli](https://angular.io/guide/setup-local#install-the-angular-cli) or you
can use some IDE utility for this purpose. I like to use the Intellij IDEA Angular Cli utility, but it
is just a UI wrapper over the Angular Cli tool itself.
To do this with Angular Cli, just type something like this in a terminal:

```shell
ng new your-app-name
```

Then, inside the project directory, run those commands to install ngx-quill:

```shell
npm install ngx-quill
npm install --save-dev @types/quill@1.3.10
```

When we install ngx-quill, it will automatically install Quill and, in the moment that
I'm writing this, the Quill last version is 1.3.7, so we enforce the @types/quill to the
1.x versions in order to avoid compatibility errors.

Then add the styles from quill to the proper place on the `angular.json` file:

```json
"styles": [
  "node_modules/quill/dist/quill.core.css",
  "node_modules/quill/dist/quill.snow.css",
  "src/styles.css"
]
```

To be able to use the ngx-quill, import it on the main module of the app:

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then to use it is as simple as:

```html
<quill-editor [(ngModel)]="text" ></quill-editor>
```

Where text is a `string` component field that will hold the html generated from the quill
editor.

The underlying quill instance cam be obtained through the `onEditorCreated` event handler:

```typescript
quillEditor: Quill;

onEditorCreated(editor: Quill): void {
  this.quillEditor = editor;
}
```

```html
<quill-editor [(ngModel)]="text" (onEditorCreated)="onEditorCreated($event)"></quill-editor>
```

## Copyright and license ##

Code and documentation copyright 2021 Fabio M. Blanco. Code released under the
[MIT License](https://github.com/fabio-blanco/test-ngx-quill/blob/master/LICENSE)
