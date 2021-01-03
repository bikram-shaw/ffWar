import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListModalPage } from './player-list-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerListModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerListModalPageRoutingModule {}
