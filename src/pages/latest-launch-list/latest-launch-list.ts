import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../app/Models/Launch';
import { LaunchPage } from '../launch/launch';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the LatestLaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-latest-launch-list',
  templateUrl: 'latest-launch-list.html',
})
export class LatestLaunchListPage {

  launches : Launch;

  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexapi: SpacexApiProvider) {
    console.log("constructor");
    
    this.spacexapi.getLatestLaunches().subscribe(data => {
      this.launches = data;
      console.log(this.launches);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestLaunchListPage');
  }

  goToDetails(launch: Launch) {
    this.navCtrl.push(LaunchPage, launch);
  }

}
