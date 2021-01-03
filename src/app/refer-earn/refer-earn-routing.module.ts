import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferEarnPage } from './refer-earn.page';

const routes: Routes = [
  {
    path: '',
    component: ReferEarnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferEarnPageRoutingModule {}
