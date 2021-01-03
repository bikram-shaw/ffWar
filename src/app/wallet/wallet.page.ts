import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WalletService } from '../services/wallet.service';
import { WithdrawModelPage } from '../withdraw-model/withdraw-model.page';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  private userData
  walletBal= {
    'wal_bal':'0',
    'win_bal':'0'
  };
  txn_data:{};
  
  constructor(
    private modalController: ModalController,
    private walletService:WalletService
    
    ) { }

  ngOnInit() {
    this.getWalletBalance()
    this. getTxnHistory()
  }
  ionViewWillEnter() {
    this.ngOnInit();
}
  dismiss() {
    this.modalController.dismiss()
  }

  getWalletBalance()
  {
   this.walletService.getWalletBalance().subscribe(res=>{
     
     this.walletBal=res;
    
     
   })
  }
  getTxnHistory()
  {
    this.walletService.getTxnHistory().subscribe(res=>{
    
  this.txn_data=res;
  
    })
  }
  
    async openWithdrawModel(win_bal) {
    
      const modal = await this.modalController.create({
        component: WithdrawModelPage,
        componentProps: {
          "win_bal":win_bal
          
        }
      });
      return await modal.present();
    }
    
     successCallback = (response) => {
      if (response.STATUS == "TXN_SUCCESS") {
          // Verify Transaction Status and Amount.
          // Proceed further...
          // Refer PayTM Gateway Docs for Response Attributes/Properties
      } else {
          // response.RESPCODE will be the error code.
          
          alert(`Transaction Failed for reason: - ${response.RESPMSG} (${response.RESPCODE})`);
  
          // Handle Error...
      }
  }
   txnRequest = {
    "MID": "eVExLv25221231925149",                  // PayTM Credentials
    "ORDER_ID": "ORDER0000000001",      //Should be unique for every order.
    "CUST_ID": "CUST0001",
    "INDUSTRY_TYPE_ID": "Retail",       // PayTM Credentials
    "CHANNEL_ID": "WAP",                // PayTM Credentials
    "TXN_AMOUNT": "1",                  // Transaction Amount should be a String
    "WEBSITE": "DEFAULT",            // PayTM Credentials
    "CALLBACK_URL": "https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=ORDER0000000001", // Callback url
}
   addMoney(){
    (<any>window).paytm.startPayment(
      this.txnRequest,
      this.successCallback,
      )
    
   }
    
  }

