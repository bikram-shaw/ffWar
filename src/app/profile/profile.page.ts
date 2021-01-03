import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.userData=JSON.parse(localStorage.getItem("userData"));
  }
  dismiss() {
    this.modalController.dismiss()
  }
}
