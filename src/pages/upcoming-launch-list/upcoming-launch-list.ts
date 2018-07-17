import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Launch } from '../../app/Models/Launch';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchPage } from '../launch/launch';

/**
 * Generated class for the UpcomingLaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming-launch-list',
  templateUrl: 'upcoming-launch-list.html',
})
export class UpcomingLaunchListPage {

  launches : Launch[];

  constructor(private navCtrl: NavController, private spacexapi: SpacexApiProvider) {
    
    // Get upcoming launch list data from api
    this.spacexapi.getUpcomingLaunches().subscribe(data => {
      this.launches = data;
    });
  }

  ionViewDidLoad() {}

  // Allow to pass launch object to LaunchPage
  goToDetails(launch: Launch) {
    this.navCtrl.push(LaunchPage, launch);
  }

}
