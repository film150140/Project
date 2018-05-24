import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowbmiPage } from '../showbmi/showbmi';

/**
 * Generated class for the CalbmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calbmi',
  templateUrl: 'calbmi.html',
})
export class CalbmiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showbmi(formbmi_form){
    let hieght = formbmi_form.hieght;
    let wieght = formbmi_form.wieght;
    let bmitotal = wieght/((hieght*0.01)*(hieght*0.01));
    this.navCtrl.push(ShowbmiPage,{bmical:bmitotal});
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad CalbmiPage');
  }


}
