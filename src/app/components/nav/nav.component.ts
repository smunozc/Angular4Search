import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[];
  value: string;

  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        routerLink: "/"
      },
    ];
  }

}
