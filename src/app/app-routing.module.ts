import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { AuthGuard } from "./auth/auth.guard";
import { UploadComponent } from "./pages/upload/upload.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MineComponent } from "./pages/mine/mine.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            redirectTo: "home",
            pathMatch: "full",
          },
          {
            path: "home",
            component: HomeComponent,
          },
          {
            path: "upload",
            component: UploadComponent,
          },
          {
            path: "mine",
            component: MineComponent,
          },
        ],
      },
    ],
  },
  {
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "legacy",
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
