import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowbmrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showbmr',
  templateUrl: 'showbmr.html',
})
export class ShowbmrPage {
  bmrcal:string;
  tdee:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowbmiPage');
    this.bmrcal = this.navParams.get('bmrcal');
    this.tdee = this.navParams.get('tdee');
  
  }

}
