import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultModelPage } from '../result-model/result-model.page';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  completedMatch: any;

  constructor(
    private gameService:GameService,
    private modalController:ModalController
  ) { }
  noCompletedMatch:boolean=false
  ngOnInit() {
    this.fetchCompletedGame()
  }
  ionViewWillEnter() {
    this.ngOnInit();
}
sendToYoutube(){
  window.open('https://www.youtube.com/c/GamingWithRowdy/videos?view_as=subscriber', '_system');
}
fetchCompletedGame()
{
  this.gameService.completedMatch().subscribe(res=>{
    if(res.length!=0)
    this.completedMatch=res;
    else
    this.noCompletedMatch=true
  })
}
async resultModal(game_id) {
    
  const modal = await this.modalController.create({
    component: ResultModelPage,
    componentProps: {
      'game_id': game_id,
      
      
    }
  });
  return await modal.present();
}

}
