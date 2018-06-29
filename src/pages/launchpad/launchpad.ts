import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launchpad } from '../../app/Models/Launchpad';
import { Rocket } from '../../app/Models/Rocket';
import { RocketPage } from '../rocket/rocket';

/**
 * Generated class for the LaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad',
  templateUrl: 'launchpad.html',
})
export class LaunchpadPage {

  launchpad : Launchpad;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadPage');
    this.launchpad = this.navParams.data;
  }

  goToRocketDetails(rocket : Rocket, img: String) {
    this.navCtrl.push(RocketPage, {rocket: rocket, img: img});
  }

}
