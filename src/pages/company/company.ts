import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyHistory } from '../../app/Models/CompanyHistory';
import { CompanyInfo } from '../../app/Models/CompanyInfo';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { TruncateModule } from '@yellowspot/ng-truncate';

/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})

export class CompanyPage {

  companyHistory : CompanyHistory[];
  companyInfo : CompanyInfo;

  text: string;
  //limit: number = 40;
  //truncating = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexapi: SpacexApiProvider) {
  
    this.spacexapi.getCompanyHistory({ order: 'desc' }).subscribe(dataHistory => {
      this.companyHistory = dataHistory;
      console.log(this.companyHistory);
    });

    this.spacexapi.getCompanyInfo().subscribe(dataInfo => {
      this.companyInfo = dataInfo;
      console.log(this.companyInfo);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

}


