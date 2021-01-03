import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController, ToastController } from "@ionic/angular";
import { error } from "protractor";
import { AuthService } from "../services/auth.service";
import { CommonService } from "../services/common.service";
import { LoadingService } from '../services/loading.service';
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loadingBtn: boolean = true;
  loginForm: FormGroup;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,

    depth: 100,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }
  
           $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
  
           if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          $slideEl
            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
  
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };
  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _commonService: CommonService,
    private toastController: ToastController,
    private router: Router,
    private menuController: MenuController,
    private _loadingService: LoadingService
  ) {
    this.menuController.enable(false, "first");
  }

  ngOnInit() {
    this._authService.isLoggedIn();

    this.loginFormFun();
  }
  slideImages = ["slider 1.jpeg", "slider 2.jpeg", "slider 3.jpeg"];
  loginFormFun() {
    this.loginForm = new FormGroup({
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
    });
  }
  async loginFailedtoast(sms) {
    const toast = await this.toastController.create({
      message: sms,
      position: "bottom",
      color: "danger",
      duration: 2000,
      cssClass: "toast",
    });
    toast.present();
  }
  onSubmitLoginForm() {
    this.loadingBtn = false;
    this._userService.login(this.loginForm.value).subscribe(
      (res) => {
        this._authService.storeUserData(res);
        this.router.navigate(["home/upcoming"]);

        this.loginForm.get("password").reset();
        this.loadingBtn = true;
        this._loadingService.successtoast("Login Success")
      },
      (error) => {
        this._loadingService.failedtoast(error)
        this.loadingBtn = true;
      }
    );
  }
  pwdhs = 'eye-off'
  password = 'password'
  showPassword() {

    if (this.loginForm.get('password').value != "") {
      this.pwdhs = 'eye';
      this.password = 'text'
    }

  }
}
