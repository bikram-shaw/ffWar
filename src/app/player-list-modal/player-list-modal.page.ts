import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-player-list-modal',
  templateUrl: './player-list-modal.page.html',
  styleUrls: ['./player-list-modal.page.scss'],
})
export class PlayerListModalPage implements OnInit {
  @Input() game_id: any;
  joinPlayer=[];
  constructor(
    private modalController:ModalController,
    private gameServices:GameService
  ) { }

  ngOnInit() {
    this.fetchJoinPlayer()
  }
  dismiss() {  
    this.modalController.dismiss();  
  }  
  fetchJoinPlayer(){
    this.gameServices.fetchJoinPlayer(this.game_id).subscribe(res=>{
      this.joinPlayer=res;
      console.log(res)
    })
  }
}
