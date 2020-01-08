import { NgModule } from "@angular/core";
import { AchievementsPage } from './pages/achievements.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AchievementsRoutingModule } from './achievements-routing.module';

@NgModule({
    declarations: [AchievementsPage],
    imports: [IonicModule, CommonModule, AchievementsRoutingModule]
})
export class AchievementsModule {

}