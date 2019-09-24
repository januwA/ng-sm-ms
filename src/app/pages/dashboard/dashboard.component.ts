import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl'],
})
export class DashboardComponent implements OnInit {
  public navLinks: any[] = [
    {path: '/home', label: 'Home'},
    {path: '/upload', label: 'Upload'},
  ];

  constructor() {}

  ngOnInit() {}
}
