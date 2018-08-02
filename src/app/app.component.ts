import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  navCtrl:NavController = null; // please add this line as default generated page plus the --ts option on command line
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, navCtrl: NavController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.navCtrl = navCtrl;
    });
  }

  openPage(page){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.setRoot(HomePage);
  }

}
