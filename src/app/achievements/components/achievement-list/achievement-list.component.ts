import { Component, Input } from "@angular/core";
import { IAchievement } from '../../models/achievement.model';

@Component({
    selector: 'achievement-list',
    templateUrl: 'achievement-list.component.html',
    styleUrls: ['achievement-list.component.scss']
})
export class AchievementListComponent {

    @Input() achievements: Array<IAchievement> = [];

    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
         let draggedItem = this.achievements.splice(event.detail.from,1)[0];
         this.achievements.splice(event.detail.to,0,draggedItem)
        event.detail.complete();
      };
      test(arg: string){
        console.log("To pochodzi z ", arg);
    }
}