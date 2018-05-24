import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalbmrPage } from './calbmr';

@NgModule({
  declarations: [
    CalbmrPage,
  ],
  imports: [
    IonicPageModule.forChild(CalbmrPage),
  ],
})
export class CalbmrPageModule {}
