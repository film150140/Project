import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ShowdrinkPage } from '../pages/showdrink/showdrink';
import { ShowsnackPage } from '../pages/showsnack/showsnack';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenServiceProvider } from '../providers/authen-service/authen-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ShowdrinkPage,
    ShowsnackPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ShowdrinkPage,
    ShowsnackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenServiceProvider
  ]
})
export class AppModule {}
