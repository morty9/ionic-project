import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Launch } from '../../app/Models/Launch';
import { LaunchPage } from '../launch/launch';
import { LaunchpadListPage } from '../launchpad-list/launchpad-list';

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
  upcomingLaunches : Launch[];
  upLaunch : Launch;
  upcoming : string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private spacexapi: SpacexApiProvider) {
    this.spacexapi.getLaunchesByParams({ order: 'desc' }).subscribe(data => {
      this.launches = data;
      console.log(this.launches);
      
    });

    this.spacexapi.getUpcomingLaunches().subscribe(data => {
      this.upcomingLaunches = data;
      this.upLaunch = data[0];
      console.log(this.upLaunch);
      
      this.setNextLaunch();
    });
  }

  setNextLaunch() {

    setTimeout(() => {

      let diffInMs: number = Date.parse(this.upcomingLaunches[0].launch_date_utc.toString()) - Date.parse(new Date().toUTCString());
      this.upcoming = this.formatTime(diffInMs);
      
      this.setNextLaunch();
    }, 1000);

  }

  private formatTime(msTime: number): string{

    var res: string = "";

    var tmp = Math.trunc(msTime / 1000);
    var s = tmp % 60;

    tmp = Math.trunc(tmp / 60);
    var m = tmp % 60;

    tmp = Math.trunc(tmp / 60);
    var h =  tmp % 24;

    tmp = Math.trunc(tmp / 24)
    var d = tmp % 365;

    var y = Math.trunc(tmp / 365);

    if(y > 0){
      res += y + "y ";
    }

    if(d > 0){
      res += d + "d ";
    }

    if(h > 0){
      res += h + "h ";
    }

    if(m > 0){
      res += m + "m ";
    }

    if(s > 0){
      res += s + "s ";
    }

    return res;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  goToDetails(launch: Launch) {
    this.navCtrl.push(LaunchPage, launch);
  }

}

