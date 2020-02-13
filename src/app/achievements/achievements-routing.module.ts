import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AchievementsPage } from './pages/achievements.page';
import { OneAchievementPage } from './pages/oneAchievement.page';

const routes: Routes = [
    {path: '', component: AchievementsPage, pathMatch: 'full'},
    {path: 'one-achievement', component: OneAchievementPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AchievementsRoutingModule {

}