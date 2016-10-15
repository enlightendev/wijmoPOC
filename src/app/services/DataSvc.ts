'use strict';

import {Injectable} from "@angular/core";
import * as wjcCore from "wijmo/wijmo";


// Common data service
@Injectable()
export class DataSvc {
  // data used to generate random items
  getMusicians(): any[] {
    var names = 'Paul,Mark,Pete,Ringo,Luke,Jacob,John,Nate,Zym,George,Toom,Crash,Boom,Dewd'.split(','),
      musicians = [];
    for (var i = 0; i < names.length; i++) {
      var item = {
        id: i,
        name: names[i],
        photo: '|Paul|John|George|Ringo|'
          .indexOf('|' + names[i] + '|') >= 0
          ? 'resources/' + names[i] + '.png'
          : null
      };
      musicians.push(item);
    }
    return musicians;
  }

  // data used to generate random items
  getData(count: number): wjcCore.ObservableArray {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = new wjcCore.ObservableArray();
    for (var i = 0; i < count; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 == 0
      });
    }
    return data;
  }

  getCountryMap(): { name: string, key: number }[] {
    return [
      { name: 'US', key: 0 },
      { name: 'Germany', key: 1 },
      { name: 'Japan', key: 2 },
      { name: 'Italy', key: 3 },
      { name: 'Greece', key: 4 },
      { name: 'Spain', key: 5 },
      { name: 'Chile', key: 6 },
      { name: 'China', key: 7 },
      { name: 'Canada', key: 8 },
      { name: 'Astralia', key: 9 },
      { name: 'Austria', key: 10 }
    ];
  }
}
