import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImagesProvider } from '../providers/images/images';
import {Part2Page} from "../pages/part2/part2";
import {Part3Page} from "../pages/part3/part3";
import {Part4Page} from "../pages/part4/part4";
import { AngularMasonry,AngularMasonryBrick } from 'angular2-masonry';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Part2Page,
    Part3Page,
    Part4Page,
    AngularMasonry,
    AngularMasonryBrick
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Part2Page,
    Part3Page,
    Part4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagesProvider
  ]
})
export class AppModule {}
