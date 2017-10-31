import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImagesProvider} from "../../providers/images/images";

/**
 * Generated class for the Part4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-part4',
  templateUrl: 'part4.html',
})
export class Part4Page {

    private images: string[];

    constructor(public imagesService: ImagesProvider) {

    }

    ionViewWillEnter() {
        this.images = this.imagesService.getPartTwo();
        console.log(this.images);
    }

}
