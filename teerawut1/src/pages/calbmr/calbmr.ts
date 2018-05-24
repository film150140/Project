import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowbmrPage } from '../showbmr/showbmr';

/**
 * Generated class for the CalbmrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calbmr',
  templateUrl: 'calbmr.html',
})
export class CalbmrPage {
  tdee : number;
  bmrtotal : number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showbmr(formbmr_form){
    let hieght = formbmr_form.hieght;
    let wieght = formbmr_form.wieght;
    let age = formbmr_form.age;
    if(formbmr_form.gender == "m"){
    this.bmrtotal = 66 + (13.7 * wieght)+(5*hieght)-(6.8*age);
    
    } else if(formbmr_form.gender == "f") {
    this.bmrtotal = 665 + (9.6 * wieght)+(1.8*hieght)-(4.7*age);
    }
    if(formbmr_form.exer == "1"){
      this.tdee = 1.2*this.bmrtotal
    } else if(formbmr_form.exer == "2"){
      this.tdee = 1.375*this.bmrtotal
    } else if(formbmr_form.exer == "3"){
      this.tdee = 1.55*this.bmrtotal
    } else if(formbmr_form.exer == "4"){
      this.tdee = 1.7*this.bmrtotal
    } else if(formbmr_form.exer == "5"){
      this.tdee = 1.9*this.bmrtotal
    }
    

    this.navCtrl.push(ShowbmrPage,{bmrcal:this.bmrtotal,tdee :this.tdee});
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalbmrPage');
  }

}
