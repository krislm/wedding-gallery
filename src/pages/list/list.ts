import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ImagesProvider} from "../../providers/images/images";
import 'masonry-layout/masonry.js';
import {SafeUrl} from "@angular/platform-browser";

declare const Masonry: any;

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private images: string[];
    options = {
        gutter:10,
        transitionDuration: '0.8s'
    };

  constructor(public imagesService: ImagesProvider) {
  }

  ionViewWillEnter() {
      this.images = this.imagesService.getPartOne();
      console.log(this.images);
      /*setTimeout(() => {
          var elem = document.querySelector('.grid');
          var msnry = new Masonry(elem, {
              // options
              itemSelector: '.grid-item',
              fitWidth: true
          });
      }, 100);*/
  }

}
