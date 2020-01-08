import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomePageModule)
  },
  {
    path: 'workplan',
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
