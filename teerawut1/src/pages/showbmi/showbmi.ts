import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-showbmi',
  templateUrl: 'showbmi.html',
})
export class ShowbmiPage {
  bmical:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowbmiPage');
    this.bmical = this.navParams.get('bmical');
  
  }

}
