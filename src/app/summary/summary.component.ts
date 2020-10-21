import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnChanges {
  @Input() globalData: any;

  constructor() {
  }

  ngOnChanges() {
    console.log(this.globalData);
  }

}
