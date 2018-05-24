import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Showfood } from '../../models/showfood';
import { Subscription } from 'rxjs/Subscription';
import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';
import { MyApp } from '../../app/app.component'

@IonicPage()
@Component({
  selector: 'page-showdrink',
  templateUrl: 'showdrink.html',
})
export class ShowdrinkPage {
  ShowfoodList: Showfood[];
  subscription: Subscription;
  typef = MyApp.prototype.pages.values;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private authServiceProvider: AuthenServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowdrinkPage');
  }
  
  private getType(){
    this.subscription = this.authServiceProvider.main(this.typef).subscribe((ShowfoodList:Showfood[])=> this.ShowfoodList = ShowfoodList);
  }
  
  ionViewWillEnter(){
    this.getType();
  }
  
  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }
}
