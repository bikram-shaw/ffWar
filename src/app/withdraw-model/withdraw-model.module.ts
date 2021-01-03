import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawModelPageRoutingModule } from './withdraw-model-routing.module';

import { WithdrawModelPage } from './withdraw-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawModelPageRoutingModule
  ],
  declarations: [WithdrawModelPage]
})
export class WithdrawModelPageModule {}
