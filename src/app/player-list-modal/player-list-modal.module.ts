import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerListModalPageRoutingModule } from './player-list-modal-routing.module';

import { PlayerListModalPage } from './player-list-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerListModalPageRoutingModule
  ],
  declarations: [PlayerListModalPage]
})
export class PlayerListModalPageModule {}
