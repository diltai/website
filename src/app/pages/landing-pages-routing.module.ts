import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPagesModule } from './landing-pages.module';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LandingPagesModule,
  ],
  exports: [RouterModule, LandingPagesModule]
})
export class LandingPagesRoutingModule {}
