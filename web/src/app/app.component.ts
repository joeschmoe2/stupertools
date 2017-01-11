/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import {MenuItem} from 'primeng/primeng';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './views/app.html'
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  items: MenuItem[];

  constructor(
    public appState: AppState) {
  }

  ngOnInit()
    {
      console.log('Initial App State', this.appState.state);

      this.items = [{
        label: 'Home',
        items: [
          {label: 'About', icon: 'fa-plus', url: '/about'},
          {label: 'Fleek Level', icon: 'fa-download'}
        ]
      },
        {
          label: 'Edit',
          items: [
            {label: 'Undo', icon: 'fa-refresh'},
            {label: 'Redo', icon: 'fa-repeat'}
          ]
        }];
    }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
