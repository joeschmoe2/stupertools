import { Component, OnInit } from '@angular/core';
import { FFDataService } from './services/ff-getdata.service';
import { randomData } from './models/randomData';

/**
 * This class represents the lazy loaded ffComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-ff',
  templateUrl: 'ff.component.html',
  styleUrls: ['ff.component.css'],
})

export class FFComponent implements OnInit {
  errorMessage: string;
  show: boolean = false;
  cols: any[];
  randomData: randomData[] = [];

  /**
   * Get the names OnInit
   */
  constructor(public FFDataService: FFDataService) {}

  ngOnInit() {
    //this.lazyLoad
  }

  getNames() {
    this.FFDataService.get()
      .subscribe(
        randomData => this.randomData = randomData,
        error => this.errorMessage = <any>error
      );

    this.cols = [
      {field: 'postId', header: 'AnotherId'},
      {field: 'id', header: 'Id'},
      {field: 'name', header: 'Name'},
      {field: 'email', header: 'Email'},
      {field: 'body', header: 'uberLongMessage'}
    ];
    this.show = true;
  }

  /**
   * Returns a grid of players based on filter selections
   * Options: Position, Scoring Type(PPR, Standard, custom (eventually)), Team
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  viewStats(): boolean {
    // TODO: returns grid of top 300 player results by scoring choice (default ALL players and PPR)
    this.getNames();
    return false;
  }

}
