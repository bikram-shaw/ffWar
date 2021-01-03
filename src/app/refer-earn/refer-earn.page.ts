import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-refer-earn',
  templateUrl: './refer-earn.page.html',
  styleUrls: ['./refer-earn.page.scss'],
})
export class ReferEarnPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss()
  }
}
