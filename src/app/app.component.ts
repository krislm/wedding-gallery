import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {Part2Page} from "../pages/part2/part2";
import {Part3Page} from "../pages/part3/part3";
import {Part4Page} from "../pages/part4/part4";
import {ImagesProvider} from "../providers/images/images";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public imagesService: ImagesProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Vielse', component: ListPage },
      { title: 'Reception', component: Part2Page },
      { title: 'Middag', component: Part3Page },
      { title: 'Fest', component: Part4Page }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // do this first
      this.imagesService.initLists();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
