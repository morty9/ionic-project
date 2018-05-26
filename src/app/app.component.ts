import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { LaunchpadListPage } from '../pages/launchpad-list/launchpad-list';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { CompanyPage } from '../pages/company/company';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LaunchListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Launches', component: LaunchListPage },
      { title: 'Rockets', component: RocketListPage },
      { title: 'Launchpads', component: LaunchpadListPage },
      { title: 'Capsules' , component: CapsuleListPage },
      { title: 'Company' , component: CompanyPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
