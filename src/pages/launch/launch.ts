import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../app/Models/Launch';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Rocket } from '../../app/Models/Rocket';
import { RocketPage } from '../rocket/rocket';

/**
 * Generated class for the LaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
})
export class LaunchPage {

  launch : Launch;
  rockets : Rocket[];
  imgRocket : String[] = ["rocket1.jpg", "rocket2.jpg", "rocket3.jpg", "rocket4.jpg"];


  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexapi: SpacexApiProvider) {
    this.spacexapi.getAllRockets().subscribe(data => {
      this.rockets = data;
      console.log(this.rockets);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchPage');
    this.launch = this.navParams.data;
    console.log(this.launch);
  }

  goToRocketDetails(rocketStr: String) {
    let r : Rocket;
    let index: number = 0;
    //console.log("Rocket String" + rocketStr);

    for(r of this.rockets)
    {
      console.log(r.name + "<==>" + rocketStr);

        if (r.name == rocketStr)
        {
          console.log("SAME");

          this.navCtrl.push(RocketPage, {rocket: r, img: this.imgRocket[index]});
        }
      index += 1;
    }
  }
}
