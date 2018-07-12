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

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexapi: SpacexApiProvider) {
  
    // Get company history data from api by "descendant" order
    this.spacexapi.getCompanyHistory({ order: 'desc' }).subscribe(dataHistory => {
      this.companyHistory = dataHistory;
    });

    // Get company info data from api
    this.spacexapi.getCompanyInfo().subscribe(dataInfo => {
      this.companyInfo = dataInfo;
    });

  }

  ionViewDidLoad() {}

}


