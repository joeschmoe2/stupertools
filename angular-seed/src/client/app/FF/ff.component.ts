import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded ffComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-ff',
  templateUrl: 'ff.component.html',
  styleUrls: ['ff.component.css'],
})
export class FfComponent implements OnInit {

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    //this.getNames();
  }

  /**
   * TODO modify to get player stats
   */

  /**
   * Returns a grid of players based on filter selections
   * Options: Position, Scoring Type(PPR, Standard, custom (eventually)), Team
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  viewStats(): boolean {
    // TODO: returns grid of top 300 player results by scoring choice (default ALL players and PPR)
    alert('not done');
    return false;
  }

}
