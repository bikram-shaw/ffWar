import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.page.html',
  styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit {
  ongoingMatchData=[];
  noOngoingMatch: boolean=false;

  constructor(
    private alertController:AlertController,
    private commonServices:CommonService
  ) { }

  ngOnInit() {
    this.commonServices.ongoingMatches().subscribe(data => {
      this.ongoingMatchData = data;
     
      if (data.length === 0) {
        this.noOngoingMatch = true;
      }
    });
      
  }
  ionViewWillEnter() {
     this.ngOnInit();
}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Room Details',
     
      message: '<br>Room Id :123456 <br><br>  Password :1524',
      buttons: ['OK']
    });

    await alert.present();
  }
  sendToYoutube(){
    window.open('https://www.youtube.com/c/GamingWithRowdy/videos?view_as=subscriber', '_system');
  }
}
