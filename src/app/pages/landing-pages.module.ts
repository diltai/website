import { WebMaterialModule } from './web-material.module';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './home-page/about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { DownloadComponent } from './home-page/download/download.component';
import { FeaturesComponent } from './features-page/features/features.component';
import { OfflinePricingComponent } from './pricing/offline-pricing/offline-pricing.component';
import { OnlinePricingComponent } from './pricing/online-pricing/online-pricing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { WebFooterComponent } from './components/web-footer/web-footer.component';
import { WebToolBarModule } from './components/web-tool-bar/web-tool-bar.module';


@NgModule({
  declarations: [
    AboutComponent,
    PricingComponent,
    DownloadComponent,
    FeaturesComponent,
    OfflinePricingComponent,
    OnlinePricingComponent,
    HomePageComponent,
    FeaturesPageComponent,
    WebFooterComponent
  ],
  imports: [
    NoopAnimationsModule,
    WebMaterialModule,
    RouterModule,
    WebToolBarModule
  ],
  providers: [],
  bootstrap: []
})
export class LandingPagesModule {}
