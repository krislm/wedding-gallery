import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImagesProvider} from "../../providers/images/images";

/**
 * Generated class for the Part2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-part2',
  templateUrl: 'part2.html',
})
export class Part2Page {

    private images: string[];

    constructor(public imagesService: ImagesProvider) {

    }

    ionViewWillEnter() {
        this.images = this.imagesService.getPartTwo();
        console.log(this.images);
    }

}
