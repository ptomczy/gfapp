import { NgModule } from "@angular/core";
import { AchievementsPage } from './pages/achievements.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AchievementsRoutingModule } from './achievements-routing.module';
import { OneAchievementPage } from './pages/oneAchievement.page';
import { AchievementService } from './services/achievement.service';
import { AchievementListComponent } from './components/achievement-list/achievement-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AchievementsPage, OneAchievementPage, AchievementListComponent],
    imports: [IonicModule, CommonModule, AchievementsRoutingModule, FormsModule],
    providers: [AchievementService],
    exports: [AchievementListComponent]
})
export class AchievementsModule {

}