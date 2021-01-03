import { Injectable } from "@angular/core";
import { AlertController, LoadingController, ToastController } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class LoadingService {
  loadingCounter = 0;
  constructor(public loadingController: LoadingController,
    public alertController:AlertController,
    public toastController: ToastController) { }

  showLoading(message: string) {
    return this.loadingController
      .create({
        duration: 5000,
        message: message,
      })
      .then(() => this.loadingCounter++);
  }

  dismissLoading() {
    if (this.loadingCounter > 0) {
      this.loadingController.dismiss();
    }
  }
  async successtoast(sms) {
    const toast = await this.toastController.create({
      message: sms,
      duration: 3000,
      cssClass: "successtoast",
      color: "dark",
      position: "top",
      keyboardClose:true,
      
     
    });
    toast.present();
  }
  async failedtoast(sms) {
    const toast = await this.toastController.create({
      message: sms,
      position: "bottom",
      keyboardClose:true,
      color:'dark',
      duration: 3000,
      cssClass: "failedtoast",
    });
    toast.present();
  }
  async alert(sms) {
    const alert = await this.alertController.create({
     
      message: sms,
      buttons: ['OK']
    });

    await alert.present();
  }

}
