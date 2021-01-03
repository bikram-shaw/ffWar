import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OtpPage } from '../otp/otp.page';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {
   
  }
  dismiss() {  
    this.modalController.dismiss();  
  } 
  async otpModal() {
    const modal = await this.modalController.create({
    component: OtpPage
    });
    return await modal.present();
   }
}
