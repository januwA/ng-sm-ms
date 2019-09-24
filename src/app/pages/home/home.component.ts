import {Component, OnInit} from '@angular/core';
import * as localforage from 'localforage';
import {TokenService} from 'src/app/shared/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {
  constructor(private tokenService: TokenService) {}

  async ngOnInit() {
    const token: string = await this.tokenService.token;
    console.log(token);
  }
}
