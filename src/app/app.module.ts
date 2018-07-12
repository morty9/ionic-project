import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { HttpClientModule } from '@angular/common/http';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { CompanyPage } from '../pages/company/company';
import { LaunchpadListPage } from '../pages/launchpad-list/launchpad-list';
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import { LaunchPage } from '../pages/launch/launch';
import { CapsulePage } from '../pages/capsule/capsule';
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { RocketPage } from '../pages/rocket/rocket';
import { UpcomingLaunchListPage } from '../pages/upcoming-launch-list/upcoming-launch-list';
import { MenuLaunchesPage } from '../pages/menu-launches/menu-launches';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { LatestLaunchPage } from '../pages/latest-launch/latest-launch';

@NgModule({
  declarations: [
    MyApp,
    LaunchListPage,
    UpcomingLaunchListPage,
    LatestLaunchPage,
    MenuLaunchesPage,
    LaunchPage,
    CapsuleListPage,
    CapsulePage,
    CompanyPage,
    LaunchpadListPage,
    LaunchpadPage,
    RocketListPage,
    RocketPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LaunchListPage,
    UpcomingLaunchListPage,
    LatestLaunchPage,
    MenuLaunchesPage,
    LaunchPage,
    CapsuleListPage,
    CapsulePage,
    CompanyPage,
    LaunchpadListPage,
    LaunchpadPage,
    RocketListPage,
    RocketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
