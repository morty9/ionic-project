import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Capsule } from '../../app/Models/Capsule';

/**
 * Generated class for the CapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule',
  templateUrl: 'capsule.html',
})
export class CapsulePage {

  capsule:Capsule;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.capsule = this.navParams.data;
  }

}
