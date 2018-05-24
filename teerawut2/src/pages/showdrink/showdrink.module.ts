import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowdrinkPage } from './showdrink';

@NgModule({
  declarations: [
    ShowdrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowdrinkPage),
  ],
})
export class ShowdrinkPageModule {}
