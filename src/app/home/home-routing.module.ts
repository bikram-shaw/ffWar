import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {

    path: '',
    component: HomePage,
    children: [

      {
        path: 'upcoming',

        loadChildren: () => import('../upcoming/upcoming.module').then(m => m.UpcomingPageModule)
      },
      {
        path: 'ongoing',
        loadChildren: () => import('../ongoing/ongoing.module').then(m => m.OngoingPageModule)
      },
      {
        path: 'result',
        loadChildren: () => import('../result/result.module').then(m => m.ResultPageModule)
      }
      , {
        path: 'wallet',
        loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)

      },
    ]

  },
  {
    path: '',
    redirectTo: '/home/upcoming',
    pathMatch: 'full'
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
