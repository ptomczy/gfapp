import { Component, Input, ChangeDetectorRef } from "@angular/core";
import { IAchievement } from '../../../achievements/models/achievement.model';
import { Router } from '@angular/router';
import { AchievementService } from '../../../achievements/services/achievement.service';

@Component({
    selector: 'list-component',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class ListComponent {

    @Input() listElements: Array<IAchievement> = [];

    constructor(private router: Router, private achievementService: AchievementService){
    }

    onRenderItems(event) {
        //console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
        let draggedItem = this.listElements.splice(event.detail.from,1)[0];
        this.listElements.splice(event.detail.to,0,draggedItem);
        event.detail.complete();
        this.setNewOrder();
        this.saveToDb();
      };

    edit(el: IAchievement) {
        this.router.navigate(['listElements/one-achievement', el]);
    }

    delete(el: IAchievement){
        //console.log("Usuwanie elementu ", el.name);
        let idx = this.listElements.findIndex(elem => elem.name == el.name && elem.tag == el.tag);
        this.achievementService.deleteAchievement(el);
    }

    setNewOrder(){
        let ctr = 1;
        this.listElements.forEach(el => {
            el.order = ctr;
            ctr++;
        });
    }

    saveToDb(){
        this.achievementService.putAchievementsToDb(this.listElements);
    }

    sort(dir: string){
        switch(dir){
            case 'asc':{
                this.listElements.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
                break;
            }
            case 'desc':{
                this.listElements.sort((a,b) => b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1);
                break;
            }
        }
        this.saveToDb();
    }
}