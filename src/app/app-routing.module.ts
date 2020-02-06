import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./takeOff/takeOff.module').then(m => m.TakeOffModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomePageModule)
  },
  {
    path: 'workplan',
    canActivate: [AuthGuard],
    loadChildren: () => import('./workplan/workplan.module').then(m => m.WorkplanModule)
  },
  {
    path: 'affirmations',
    loadChildren: () => import('./affirmations/affirmation.module').then(m => m.AffirmationModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./achievements/achievements.module').then(m => m.AchievementsModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
