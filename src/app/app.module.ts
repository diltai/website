import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPagesRoutingModule } from './pages/landing-pages-routing.module';
import { LandingPagesModule } from './pages/landing-pages.module';
import { WebToolBarModule } from './pages/components/web-tool-bar/web-tool-bar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    WebToolBarModule,
    LandingPagesModule,
    LandingPagesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
