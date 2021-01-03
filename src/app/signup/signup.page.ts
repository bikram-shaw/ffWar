import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";
import { error } from 'protractor';
import { AuthService } from "../services/auth.service";
import { CommonService } from "../services/common.service";
import { LoadingService } from '../services/loading.service';
import { UserService } from "../services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  loadingBtn: boolean = true;
  signUpForm: FormGroup;
  
  constructor(
    private _userService: UserService,
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private _commonService: CommonService,
    private _authService: AuthService,
    public _loadingServices: LoadingService
  ) { }

  ngOnInit() {
    this.signUpFormFun();
  }




  error_messages = {
    name: "Enter a valid name",
    email: "Enter a valid email",
    mobile: "Enter a valid mobile",
    password: "Password length should be 4-8 digit long",
    cpassword: "Confirm password not matched",
  };
  signUpFormFun() {
    this.signUpForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^[6-9]\d{9}$/),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
      refer_code: new FormControl("", [
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    });
  }

  onSubmitSignUpForm() {
    this.loadingBtn = false;
   
    this._userService.signUp(this.signUpForm.value).subscribe((response) => {

      this._authService.storeUserData(response);
      this.router.navigate(["home/upcoming"]);
      this._loadingServices.successtoast("Signup successfully.")

    }, error => {
     
        this._loadingServices.failedtoast(error);
        this.loadingBtn = true;
     
    
    }
    );
  }
  wallet(arg0: string, wallet: any) {
    throw new Error("Method not implemented.");
  }
}
