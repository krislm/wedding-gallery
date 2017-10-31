import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

declare const require;

/*
  Generated class for the ImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagesProvider {

    private part1 = {};
    private part2 = {};
    private part3 = {};
    private part4 = {};


  constructor(public http: Http, private sanitizer: DomSanitizer) {

  }

  public initLists() {
      // const part1List = this.getPartOne();
      // const splitter1 = Math.ceil(part1List.length/4);
      //
      // this.part1['page1'] = part1List.slice(0, splitter1);
      // this.part1['page2'] = part1List.slice(splitter1, splitter1*2);
      // this.part1['page3'] = part1List.slice(splitter1*2, splitter1*3);
      // this.part1['page4'] = part1List.slice(splitter1*3, part1List.length+1);


      const part2List = this.getPartTwo();
      console.info('part2 length: '+part2List.length)
      const splitter2 = Math.ceil(part2List.length/4);

      this.part2['page1'] = part2List.slice(0, splitter2);
      this.part2['page2'] = part2List.slice(splitter2, splitter2*2);
      this.part2['page3'] = part2List.slice(splitter2*2, splitter2*3);
      this.part2['page4'] = part2List.slice(splitter2*3, part2List.length+1);


      const part3List = this.getPartThree();
      console.info('part3 length: '+part3List.length)
      const splitter3 = Math.ceil(part3List.length/8);

      this.part3['page1'] = part3List.slice(0, splitter3);
      this.part3['page2'] = part3List.slice(splitter3, splitter3*2);
      this.part3['page3'] = part3List.slice(splitter3*2, splitter3*3);
      this.part3['page4'] = part3List.slice(splitter3*3, part3List.length+1);


      const part4List = this.getPartFour();
      console.info('part4 length: '+part4List.length)
      const splitter4 = Math.ceil(part4List.length/4);

      this.part4['page1'] = part4List.slice(0, splitter4);
      this.part4['page2'] = part4List.slice(splitter4, splitter4*2);
      this.part4['page3'] = part4List.slice(splitter4*2, splitter4*3);
      this.part4['page4'] = part4List.slice(splitter4*3, part4List.length+1);
  }

  public getPartOne(): string[] {
      // let list: string[] = require('../../../part1.json');
      // let pathList: SafeUrl[] = [];
      // list.forEach((path, index) => {
      //     const tempPath: string = path.substring(4);
      //     pathList.push(this.sanitizer.bypassSecurityTrustUrl(tempPath));
      // });
      // return pathList;
      let list: string[] = require('../../../part1.json');
      list.forEach((path, index) => {
          list[index] = path.substring(4);
      });
      return list;
  }

  public getPartTwo(): string[] {
      let list: string[] = require('../../../part2.json');
      list.forEach((path, index) => {
          list[index] = path.substring(4);
      });
      return list;
  }

  public getPartThree(page?: number): string[] {
      if (page) {
          const pageIndex = 'page'+page;
          return this.part3[pageIndex];
      } else {
          let list: string[] = require('../../../part3.json');
          list.forEach((path, index) => {
              list[index] = path.substring(4);
          });
          return list;
      }
  }

  public getPartFour(): string[] {
      let list: string[] = require('../../../part4.json');
      list.forEach((path, index) => {
          list[index] = path.substring(4);
      });
      return list;
  }

}
