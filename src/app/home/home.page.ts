import { Component, OnInit } from "@angular/core";
import { MenuController, ModalController } from "@ionic/angular";
import { AboutPage } from '../about/about.page';
import { ContactUsPage } from '../contact-us/contact-us.page';
import { ProfilePage } from '../profile/profile.page';
import { ReferEarnPage } from '../refer-earn/refer-earn.page';
import { AuthService } from "../services/auth.service";
import { WalletPage } from '../wallet/wallet.page';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private _authService: AuthService,
    private menuController: MenuController,
    private modalController: ModalController
  ) { }
  ngOnInit() {
    this._authService.isLoggedIn();
  }
  logout() {
    this._authService.logOut();
  }

  async presentModal(page) {
    this.menuController.toggle('first')
    var profile = null;
    if (page === 1) {
      profile = ProfilePage;
    }
    else if (page === 2) {
      profile = null
    }
    else if (page === 3) {
      profile = WalletPage
    }
    else if (page === 4) {
      profile = ReferEarnPage
    }
    else if (page === 5) {
      profile = ContactUsPage
    }
    else {
      profile = AboutPage
    }

    const modal = await this.modalController.create({
      component: profile,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  sendToWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=+918293253017', '_system');
  }
}
