import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultModelPage } from './result-model.page';

const routes: Routes = [
  {
    path: '',
    component: ResultModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultModelPageRoutingModule {}
