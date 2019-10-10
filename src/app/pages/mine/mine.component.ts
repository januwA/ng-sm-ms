import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/shared/interfaces/user-profile.interface';
import { MineService } from './mine.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.styl']
})
export class MineComponent implements OnInit {

  public userInfo: UserInfo;

  get diskUsageValue(): number {
    const {disk_usage_raw, disk_limit_raw} = this.userInfo;
    return (disk_usage_raw / disk_limit_raw) * 100;
  }
  constructor(
    private mineService: MineService,
  ) { }

  async ngOnInit() {
    this.userInfo = await this.mineService.getUserInfo();
  }

  logout() {
    this.mineService.logout();
  }

}
