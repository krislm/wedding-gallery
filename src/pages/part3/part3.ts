import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ImagesProvider} from "../../providers/images/images";

/**
 * Generated class for the Part3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-part3',
  templateUrl: 'part3.html',
})
export class Part3Page {

    private page: number = 1;

    private breakpoints = {
        xs: 0, sm: 576, md: 768, lg: 992, xl: 1200
    };

    private columnsPerRow: number;

    // private images: string[];
    images: any = {};//Array<string>;
    grids: Array<Array<Array<string>>> = [];//array of arrays containing arrays


    constructor(public imagesService: ImagesProvider, private platform: Platform) {
        this.images['part'+this.page] = this.imagesService.getPartThree(this.page);
        console.log(this.images);
        if (this.platform.is('cordova')) {
            this.columnsPerRow = 2;
        } else {
            const windowWidth = window.innerWidth;
            if (windowWidth >= this.breakpoints.xl) {
                this.columnsPerRow = 6;
            } else if(windowWidth >= this.breakpoints.lg) {
                this.columnsPerRow = 6
            } else if(windowWidth >= this.breakpoints.md) {
                this.columnsPerRow = 6;
            } else if(windowWidth >= this.breakpoints.sm) {
                this.columnsPerRow = 2;
            } else {
                this.columnsPerRow = 2;
            }
        }
        this.addGrid(this.page-1);
    }

    ionViewWillEnter() {
    }

    ionViewDidEnter() {
    }

    private addGrid(gridsIndex: number) {
        this.grids.push(Array(Math.ceil(this.images['part'+this.page].length/this.columnsPerRow))); //MATHS!
        this.grids[gridsIndex] = this.calculateColumnsPerRow(this.images['part'+this.page]);
    }

    private calculateColumnsPerRow(images: Array<string>): Array<Array<string>> {
        let calculatedGrid: Array<Array<string>> = [];

        let rowNum = 0; //counter to iterate over the rows in the grid

        if (images.length === 0) {
            calculatedGrid[0] = Array(0);
            return calculatedGrid;
        }
        for (let i = 0; i < images.length; i+=this.columnsPerRow) { //iterate images

            calculatedGrid[rowNum] = Array(this.columnsPerRow); //declare elements per row based on columnsPerRow variable

            for (let j = 0; j < this.columnsPerRow; j++) { // repeat for every image in this "row"
                if (images[i+j]) { // check file URI exists
                    calculatedGrid[rowNum][j] = images[i+j] // insert image
                }
            }

            rowNum++; //go on to the next row
        }

        return calculatedGrid;
    }

    private doInfinite() {
        this.images['part'+this.page] = this.imagesService.getPartThree(this.page);
        this.addGrid(this.page);
        this.page += 1;
    }
}
