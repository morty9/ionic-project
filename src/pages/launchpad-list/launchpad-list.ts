import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launchpad } from '../../app/Models/Launchpad';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchpadPage } from '../launchpad/launchpad';

/**
 * Generated class for the LaunchpadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {

  launchpads : Launchpad[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexapi: SpacexApiProvider) {
    this.spacexapi.getAllLaunchpads().subscribe(data => {
      this.launchpads = data;
      console.log(this.launchpads);
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadListPage');
  }

  goToDetails(launchpad: Launchpad) {
    this.navCtrl.push(LaunchpadPage, launchpad);
  }

}
