import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatestLaunchListPage } from './latest-launch-list';

@NgModule({
  declarations: [
    LatestLaunchListPage,
  ],
  imports: [
    IonicPageModule.forChild(LatestLaunchListPage),
  ],
})
export class LatestLaunchListPageModule {}
