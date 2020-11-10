import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Post} from '../../shared/interfaces';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  test(): void {
    console.log(this.auth.token);
  }
}
