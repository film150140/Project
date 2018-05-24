import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowsnackPage } from './showsnack';

@NgModule({
  declarations: [
    ShowsnackPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowsnackPage),
  ],
})
export class ShowsnackPageModule {}
