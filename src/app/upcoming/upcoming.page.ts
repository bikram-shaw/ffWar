import { Component, OnInit } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { JoinModalPage } from "../join-modal/join-modal.page";
import { PlayerListModalPage } from "../player-list-modal/player-list-modal.page";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.page.html",
  styleUrls: ["./upcoming.page.scss"],
})
export class UpcomingPage implements OnInit {
  upcomingMatchData=[];
  noUpcomingMatch:boolean=false;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private commonServices:CommonService
  ) {}

  ngOnInit() {
  this.commonServices.upcomingMatches().subscribe(data=>{
    this.upcomingMatchData=data;
    
     if(data.length===0 )
     {
      this.noUpcomingMatch=true;
     }
   });
    
  }
  ionViewWillEnter() {
    this.ngOnInit();
}
  async joinModal(game_id,entry_fee) {
    
    const modal = await this.modalController.create({
      component: JoinModalPage,
      componentProps: {
        'game_id': game_id,
        'entry_fee': entry_fee,
        
      }
    });
    return await modal.present();
  }
  async playerListModal(game_id) {
    
    const modal = await this.modalController.create({
      component: PlayerListModalPage,
      componentProps: {
        'game_id': game_id,
        
      }
    });
    return await modal.present();
  }

 

}
