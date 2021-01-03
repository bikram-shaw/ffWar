import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Capacitor } from "@capacitor/core/dist/esm/global";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { Platform } from "@ionic/angular";
//import { platform } from "os";
//import { Platform } from ‘@ionic/angular’;
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private nativeStorage: NativeStorage, private router: Router) { }
  platform: Platform;
  storeUserData(userData) {
    if (Capacitor.isNative) {
      this.nativeStorage.setItem("userData", userData).then(
        () => console.log("Stored item!"),
        (error) => console.error("Error storing item", error)
      );
    } else {
      localStorage.setItem("userData", JSON.stringify(userData));
      
    }
  }
  isLoggedIn() {
    if (Capacitor.isNative) {
      this.nativeStorage.getItem("userData").then((data) => {
        if (data != null) {
          //alert("data" + userData);
          this.router.navigate(["/home/upcoming"]);
        } else {
          // alert("null" + userData);
          this.router.navigate(["/"]);
        }
      });
    } else {
      let userData = JSON.parse(localStorage.getItem("userData"));
      if (userData != null) {
        this.router.navigate(["/home/upcoming"]);
      } else {
        this.router.navigate(["/"]);
      }
    }
  }
  logOut() {
    if (Capacitor.isNative) {
      this.nativeStorage.remove("userData");
    } else {
      localStorage.removeItem("userData");
    }
    this.router.navigate(["/"]);
  }
}
