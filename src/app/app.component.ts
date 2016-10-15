import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridFilter from 'wijmo/wijmo.grid.filter';

import {Component, ViewChild} from '@angular/core';
import {DataSvc} from "./services/DataSvc";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  frozenRowNum = 3;
  frozenColNum = 3;

  data: wjcCore.CollectionView;
  countryMap: wjcGrid.DataMap;

  private _downloadsColumnFilterType = wjcGridFilter.FilterType.Condition;
  private _culture = 'en';

  @ViewChild('filter') filter: wjcGridFilter.FlexGridFilter;


  // Data for for AutoComplete
  countries = [
    'Afghanistan', 'Albania', 'Algeria', 'American Samoa',
    'Andorra', 'Angola', 'Anguilla', 'Antigua',
    'Argentina', 'Armenia'];

  constructor(private dataSvc:DataSvc){

    this.data = new wjcCore.CollectionView(this.dataSvc.getData(100));

    this.countryMap = new wjcGrid.DataMap(new wjcCore.CollectionView(this.dataSvc.getCountryMap()), 'key', 'name');
  }

  toggleFreeze(flex: wjcGrid.FlexGrid) {
    if (flex) {
      var frozenCount = flex.frozenRows == 0 ? 2 : 0;
      flex.frozenRows = frozenCount;
      flex.frozenColumns = frozenCount;
    }
  }

  get downloadsColumnFilterType(): wjcGridFilter.FilterType {
    return this._downloadsColumnFilterType;
  }
  set downloadsColumnFilterType(value: wjcGridFilter.FilterType) {
    if (this._downloadsColumnFilterType != value) {
      this._downloadsColumnFilterType = value;
      var f = this.filter;
      if (f) {
        var col = f.grid.columns.getColumn('downloads'),
          cf = f.getColumnFilter(col, true);
        cf.filterType = this._downloadsColumnFilterType;
      }
    }
  }

  saveFilter() {
    localStorage['filter'] = this.filter.filterDefinition;
  }

  restoreFilter() {
    this.filter.filterDefinition = localStorage['filter'];
  }

  // create the filter and expose it to scope for customization
  initialized(s: wjcGrid.FlexGrid, e: any) {

    this.filter.filterChanging.addHandler(function () {
      console.log('filter changing');
    });

    this.filter.filterChanged.addHandler(function () {
      console.log('filter changed');
    });

    this.filter.filterApplied.addHandler(function () {
      console.log('filter applied');
    });
  }

}
