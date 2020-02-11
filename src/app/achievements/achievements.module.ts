import { NgModule } from "@angular/core";
import { AchievementsPage } from './pages/achievements.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementComponent } from './components/achievement/achievement.component';
import { AchievementService } from './services/achievement.service';

@NgModule({
    declarations: [AchievementsPage, AchievementComponent],
    imports: [IonicModule, CommonModule, AchievementsRoutingModule],
    providers: [AchievementService]
})
export class AchievementsModule {

}