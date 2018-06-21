import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatestLaunchPage } from './latest-launch';

@NgModule({
  declarations: [
    LatestLaunchPage,
  ],
  imports: [
    IonicPageModule.forChild(LatestLaunchPage),
  ],
})
export class LatestLaunchPageModule {}
