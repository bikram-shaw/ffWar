import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-withdraw-model',
  templateUrl: './withdraw-model.page.html',
  styleUrls: ['./withdraw-model.page.scss'],
})
export class WithdrawModelPage implements OnInit {

  withdrawMethod=[
    {
      "mode":"paytm","amount":"50","color":"secondary"
    },
    {
      "mode":"paytm","amount":"100","color":"secondary"
    },
    {
      "mode":"paytm","amount":"500","color":"secondary"
    },
    {
      "mode":"gpay","amount":"50","color":"danger"
    },
    {
      "mode":"gpay","amount":"100","color":"warning"
    },
    {
      "mode":"gpay","amount":"500","color":"success"
    },
    {
      "mode":"phonepay","amount":"50","color":"tertiary"
    },
    {
      "mode":"phonepay","amount":"100","color":"tertiary"
    },
    {
      "mode":"phonepay","amount":"500","color":"tertiary"
    }
  ]
  userData: any;
  @Input() win_bal;
  constructor(
    private modalController:ModalController,
    private loadingService:LoadingService,
    private walletService:WalletService
  ) {
    
   }

  ngOnInit() {
    this.userData=JSON.parse(localStorage.getItem("userData"));
  }
  
dismiss()
{
  this.modalController.dismiss()
}
withdrawBal(amount,mode){
  if(this.win_bal>=amount)
  {
    let form=new FormData()
    form.append("wth_amount",amount)
    form.append("wth_method",mode)
    
  this.walletService.withdrawRequest(form).subscribe(res=>{
    this.loadingService.alert(res)
    this.dismiss()
  })
  }
else{
this.loadingService.alert("Winning balace is low")
  this.dismiss()
}
}
}
