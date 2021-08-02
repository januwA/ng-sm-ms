import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { HomeService } from "./home.service";
import { SMMSImage } from "src/app/shared/interfaces/upload-history.interface";
import { DeleteImage } from "src/app/shared/interfaces/delete-image.interface";
import { Waterfall, WaterfallAlignment } from "ajanuw-waterfall.js";

import * as _ from "lodash";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.styl"],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  images: SMMSImage[] = [];
  wf?: Waterfall;

  constructor(
    private readonly homeService: HomeService,
    public snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.wf = new Waterfall({
      root: ".images-container",
      item: ".item",
      alignment: WaterfallAlignment.between,
    });
  }

  ngOnInit() {
    this._getData();
  }

  private async _getData() {
    const images = await this.homeService.images();
    if (images && !_.isEmpty(images)) {
      this.images = images.reverse();
    } else {
      this.images = [];
    }
  }

  ngOnDestroy(): void {
    this.wf.dispose();
  }

  /**
   * 永久删除图片资源
   */
  async delete(hash: string) {
    const { success, message }: DeleteImage =
      await this.homeService.deleteImage(hash);

    // 删除成功更新ui
    if (success) {
      this.images = this.images.filter((f) => f.hash != hash);
      this.snackBar.open("已删除", undefined, {
        duration: 1200,
      });
      setTimeout(this.wf.draw, 60);
    } else {
      this.snackBar.open(`Error: ${message}`);
    }
  }

  /**
   * * 显示原图
   * @param url
   */
  open(url: any) {
    window.open(url);
  }

  async copy(image: SMMSImage) {
    await navigator.clipboard.writeText(image.url);
  }
}
