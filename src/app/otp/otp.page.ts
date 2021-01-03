import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }
  gotoNextField(nextElement,event)
  {
    if(event.target.value!=""){
      nextElement.setFocus();
    }
       
    }
    dismiss() {  
      this.modalController.dismiss();  
    } 
}
