import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Launch } from '../../app/Models/Launch';

/**
 * Generated class for the LatestLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-latest-launch',
  templateUrl: 'latest-launch.html',
})
export class LatestLaunchPage {

  launch : Launch;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexapi: SpacexApiProvider) {
    this.spacexapi.getLatestLaunches().subscribe(data => {
      this.launch = data;
      console.log(this.launch);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestLaunchPage');
  }

}
