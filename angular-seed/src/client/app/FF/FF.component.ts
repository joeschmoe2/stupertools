import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded FFComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-FF',
  templateUrl: 'FF.component.html',
  styleUrls: ['FF.component.css'],
})
export class FFComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the FFComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * TODO modify to get player stats
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Returns a grid of players based on filter selections
   * Options: Position, Scoring Type(PPR, Standard, custom (eventually)), Team
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  viewList(): boolean {
    // TODO: returns grid of top 300 player results by scoring choice (default ALL players and PPR)
    alert("not done");
    return false;
  }

}
