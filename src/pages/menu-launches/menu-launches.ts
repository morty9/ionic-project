import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchListPage } from '../launch-list/launch-list';
import { LatestLaunchListPage } from '../latest-launch-list/latest-launch-list';
import { UpcomingLaunchListPage } from '../upcoming-launch-list/upcoming-launch-list';

/**
 * Generated class for the MenuLaunchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-launches',
  templateUrl: 'menu-launches.html',
})
export class MenuLaunchesPage {

  allLaunches : any = LaunchListPage;
  latestLaunches : any = LatestLaunchListPage;
  upcomingLaunches : any = UpcomingLaunchListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuLaunchesPage');
  }

}
