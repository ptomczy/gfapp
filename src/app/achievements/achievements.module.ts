import { NgModule } from "@angular/core";
import { AchievementsPage } from './pages/achievements.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementComponent } from './components/achievement/achievement.component';
import { AchievementService } from './services/achievement.service';
import { AchievementListComponent } from './components/achievement-list/achievement-list.component';

@NgModule({
    declarations: [AchievementsPage, AchievementComponent, AchievementListComponent],
    imports: [IonicModule, CommonModule, AchievementsRoutingModule],
    providers: [AchievementService],
    exports: [AchievementListComponent]
})
export class AchievementsModule {

}