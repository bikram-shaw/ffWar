import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultModelPageRoutingModule } from './result-model-routing.module';

import { ResultModelPage } from './result-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultModelPageRoutingModule
  ],
  declarations: [ResultModelPage]
})
export class ResultModelPageModule {}
