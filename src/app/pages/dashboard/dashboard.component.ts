import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.styl"]
})
export class DashboardComponent {
  public navLinks: any[] = [
    { path: "/home", label: "图片" },
    { path: "/upload", label: "上传" },
    { path: "/mine", label: "我的" }
  ];
}
