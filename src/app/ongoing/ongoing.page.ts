import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { GameService } from '../services/game.service';
import { LoadingService } from '../services/loading.service';

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
    private commonServices:CommonService,
    private gameservices:GameService,
    private loadingService:LoadingService
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
  async roomDetailsAlert(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Room Details',
     
      message: '<br>Room Id :'+ data.room_id+ '<br><br>  Password :'+ data.room_password,
      buttons: ['OK']
    });
   
    await alert.present();
  }
  fetchRoomDetails(game_id){
      this.gameservices.roomDetails(game_id).subscribe(res=>{
        this.roomDetailsAlert(res)
      },error=>{
        this.loadingService.alert("You have't join the match")
      })
  }
  sendToYoutube(){
    window.open('https://www.youtube.com/c/GamingWithRowdy/videos?view_as=subscriber', '_system');
  }
}
