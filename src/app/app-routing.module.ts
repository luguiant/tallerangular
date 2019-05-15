import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './core/services/preload/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/client/client.module#ClientModule',
    data: { preload : true }
  },
  {
    path:'forms',
    loadChildren: './pages/score/score.module#ScoreModule',
    data: { preload : false }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
