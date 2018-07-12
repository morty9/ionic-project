import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Capsule } from '../../app/Models/Capsule';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { CapsulePage } from '../capsule/capsule';

/**
 * Generated class for the CapsuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-list',
  templateUrl: 'capsule-list.html',
})
export class CapsuleListPage {

  capsules : Capsule[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexapi: SpacexApiProvider) {

    // Get of all capsules data from api
    this.spacexapi.getAllCapsules().subscribe(data => {
      this.capsules = data;
    })
  }

  ionViewDidLoad() {}

  // Allow to transfert capsule object to CapsulePage 
  goToDetails(capsule : Capsule) {
    this.navCtrl.push(CapsulePage, capsule);
  }

}
