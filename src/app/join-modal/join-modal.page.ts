import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameService } from '../services/game.service';
import { LoadingService } from '../services/loading.service';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-join-modal',
  templateUrl: './join-modal.page.html',
  styleUrls: ['./join-modal.page.scss'],
})
export class JoinModalPage implements OnInit {
  
  player_name:string='';
  @Input() game_id: any;
  @Input() entry_fee: any;
  userData: any;
  walletBal= {
    'wal_bal':'0',
    'win_bal':'0'
  };

  constructor(
    private modalController:ModalController,
    private gameServices:GameService,
    private walletService:WalletService,
    private loadingService:LoadingService
  ) { }

  ngOnInit() {
    
    this.getWalletBalance()
  }
  
  dismiss() {  
    this.modalController.dismiss();  
    
  }  
  joinGame(){
    let form=new FormData()
    form.append("game_id",this.game_id)
    
    form.append("player_name",this.player_name)
    if(this.player_name.length===0)
    {
      this.loadingService.failedtoast("Please enter your gaming name.")
    }
    else if(this.walletBal.wal_bal>=this.entry_fee || this.walletBal.win_bal>=this.entry_fee || this.walletBal.wal_bal+this.walletBal.win_bal>=this.entry_fee)
    {
      
      this.gameServices.joinGame(form).subscribe(res=>{
        this.dismiss()
       this.loadingService.successtoast("Join successfully")
       },error=>{
        this.loadingService.failedtoast("Something went wrong")
        
      })
    }
    else{
      this.loadingService.failedtoast("Insufficient balance to join")
    }
   
  }
  getWalletBalance()
  {
   this.walletService.getWalletBalance().subscribe(res=>{
     this.walletBal=res;
     
   })
  }
}
