import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Launch } from '../../app/Models/Launch';
import { LaunchPage } from '../launch/launch';
import { LaunchpadListPage } from '../launchpad-list/launchpad-list';
import { Rocket } from '../../app/Models/Rocket';

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {

  launches : Launch[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexapi: SpacexApiProvider) {
    this.spacexapi.getAllLaunches().subscribe(data => {
      this.launches = data;
      console.log(this.launches);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  goToDetails(launch: Launch) {
    this.navCtrl.push(LaunchPage, launch);
  }

}

