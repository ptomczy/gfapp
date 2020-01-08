import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AchievementsPage } from './pages/achievements.page';

const routes: Routes = [
    {path: '', component: AchievementsPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AchievementsRoutingModule {

}