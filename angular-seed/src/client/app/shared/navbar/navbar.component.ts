import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  userName: string;
  userPass: string;

  display: boolean = false;

  showDialog() {
    this.display=true;
  }

  private navbar: MenuItem[];
  private profile: MenuItem[];

  ngOnInit() {
    this.navbar = [
      {
        label: 'Home',
        routerLink:['/']
      },
      {
        label: 'About',
        routerLink:['/about']
        //icon: 'fa-edit',
      },
      {
        label: 'Tools',
        items: [
          {label: 'Fantasy Football', routerLink:['/FF']},
          {label: 'Day Planner'},
          {label: 'Intramural Sports StatTracker'}
        ]
      }
    ];

    this.profile = [
      {
        icon: 'fa-edit',
        items: [
          {label: 'View Profile', routerLink:['/FF']},
          {label: 'Sign Up'},
          {label: 'Login'}
        ]
      }
    ];
  }
}
