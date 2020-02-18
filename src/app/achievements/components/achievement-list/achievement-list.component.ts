import { Component, Input, ChangeDetectorRef } from "@angular/core";
import { IAchievement } from '../../models/achievement.model';
import { Router } from '@angular/router';
import { AchievementService } from '../../services/achievement.service';

@Component({
    selector: 'achievement-list',
    templateUrl: 'achievement-list.component.html',
    styleUrls: ['achievement-list.component.scss']
})
export class AchievementListComponent {

    @Input() achievements: Array<IAchievement> = [];

    constructor(private router: Router, private achievementService: AchievementService){
    }

    onRenderItems(event) {
        //console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
        let draggedItem = this.achievements.splice(event.detail.from,1)[0];
        this.achievements.splice(event.detail.to,0,draggedItem);
        event.detail.complete();
        this.setNewOrder();
        this.saveAchievementsToDb();
      };

    edit(el: IAchievement) {
        this.router.navigate(['achievements/one-achievement', el]);
    }

    delete(el: IAchievement){
        //console.log("Usuwanie elementu ", el.name);
        let idx = this.achievements.findIndex(elem => elem.name == el.name && elem.tag == el.tag);
        this.achievementService.deleteAchievement(el);
    }

    setNewOrder(){
        let ctr = 1;
        this.achievements.forEach(el => {
            el.order = ctr;
            ctr++;
        });
    }

    saveAchievementsToDb(){
        this.achievementService.putAchievementsToDb(this.achievements);
    }

    sort(dir: string){
        switch(dir){
            case 'asc':{
                this.achievements.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
                //this.achievements.sort((a,b) => a.order > b.order ? 1 : -1);
                break;
            }
            case 'desc':{
                this.achievements.sort((a,b) => b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1);
                //this.achievements.sort((a,b) => b.order > a.order ? 1 : -1);
                break;
            }
        }
        this.saveAchievementsToDb();
    }
}