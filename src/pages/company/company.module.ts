import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyPage } from './company';
import { TruncateModule } from '../../../node_modules/@yellowspot/ng-truncate';

@NgModule({
  declarations: [
    CompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyPage),
    TruncateModule
  ],
})
export class CompanyPageModule {}
