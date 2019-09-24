import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AuthModule} from './auth/auth.module';
import { UploadComponent } from './pages/upload/upload.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, UploadComponent, DashboardComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
