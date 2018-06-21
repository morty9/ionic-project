import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../app/Models/Rocket';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { RocketPage } from '../rocket/rocket';

/**
 * Generated class for the RocketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-list',
  templateUrl: 'rocket-list.html',
})
export class RocketListPage {

  rockets : Rocket[];

  img : String[] = ["rocket1.jpg", "rocket2.jpg", "rocket3.jpg", "rocket4.jpg"];

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexapi: SpacexApiProvider) {
    this.spacexapi.getAllRockets().subscribe(data => {
      this.rockets = data;
      console.log(this.rockets);      
    });
    console.log(this.img);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketListPage');
  }

  goToDetails(rocket : Rocket, img: String) {
    this.navCtrl.push(RocketPage, {rocket: rocket, img: img});
  }

}
