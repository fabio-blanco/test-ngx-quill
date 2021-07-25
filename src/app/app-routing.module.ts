import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './components/general/general.component';
import { CustomizedComponent } from './components/customized/customized.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { CustomCssComponent } from './components/custom-css/custom-css.component';

const routes: Routes = [
  { path: 'custom-css', component: CustomCssComponent},
  { path: 'customized', component: CustomizedComponent},
  { path: 'bubble', component: BubbleComponent},
  { path: '', component: GeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
