import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingLaunchListPage } from './upcoming-launch-list';

@NgModule({
  declarations: [
    UpcomingLaunchListPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingLaunchListPage),
  ],
})
export class UpcomingLaunchListPageModule {}
