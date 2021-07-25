import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { GeneralComponent } from './components/general/general.component';
import { CustomizedComponent } from './components/customized/customized.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { CustomCssComponent } from './components/custom-css/custom-css.component';
import { CustomEditorComponent } from './components/custom-editor/custom-editor.component';
import { CustomViewComponent } from './components/custom-view/custom-view.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    CustomizedComponent,
    BubbleComponent,
    CustomCssComponent,
    CustomEditorComponent,
    CustomViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
