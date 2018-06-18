import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuLaunchesPage } from './menu-launches';

@NgModule({
  declarations: [
    MenuLaunchesPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuLaunchesPage),
  ],
})
export class MenuLaunchesPageModule {}
