import { Component, Input } from "@angular/core";
import { IAchievement } from '../../models/achievement.model';
import { Router } from '@angular/router';
import { AchievementService } from '../../services/achievement.service';
import { AchievementsPage } from '../../pages/achievements.page';

@Component({
    selector: 'achievement-list',
    templateUrl: 'achievement-list.component.html',
    styleUrls: ['achievement-list.component.scss']
})
export class AchievementListComponent {

    @Input() achievements: Array<IAchievement> = [];

    constructor(private router: Router, private achievementService: AchievementService, private achievementsPage: AchievementsPage){

    }

    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
         let draggedItem = this.achievements.splice(event.detail.from,1)[0];
         this.achievements.splice(event.detail.to,0,draggedItem)
        event.detail.complete();
      };
      test(arg: string){
        console.log("To pochodzi z ", arg);
    }

    edit(el: IAchievement) {
        this.router.navigate(['achievements/one-achievement', el]);
    }

    delete(el: IAchievement){
        this.achievementService.deleteAchievement(el);
        this.achievementsPage.visibilityChange(this.achievementsPage.achievementListCurrentView);
    }
}