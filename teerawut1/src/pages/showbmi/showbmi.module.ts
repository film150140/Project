import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowbmiPage } from './showbmi';

@NgModule({
  declarations: [
    ShowbmiPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowbmiPage),
  ],
})
export class ShowbmiPageModule {}
