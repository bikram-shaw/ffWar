import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-result-model',
  templateUrl: './result-model.page.html',
  styleUrls: ['./result-model.page.scss'],
})
export class ResultModelPage implements OnInit {
  resultData: any;

  constructor(
    private modalController:ModalController,
    private gameService:GameService
  ) { }
@Input() game_id
  ngOnInit() {
    this.fetchResult()
  }
  dismiss(){
    this.modalController.dismiss()
  }
  fetchResult()
  {
this.gameService.fetchResult(this.game_id).subscribe(res=>{
  this.resultData=res
  console.log(res)
})
  }
}
