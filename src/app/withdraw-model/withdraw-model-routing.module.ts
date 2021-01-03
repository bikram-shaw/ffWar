import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawModelPage } from './withdraw-model.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawModelPageRoutingModule {}
