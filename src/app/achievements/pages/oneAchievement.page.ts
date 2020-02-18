import { Component } from "@angular/core";
import { IAchievement } from '../models/achievement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PageDisplayMode } from 'src/app/shared/models/shared.model';
import { NavController } from '@ionic/angular';
import * as db from '../../mocks/para-database';
import { AchievementService } from '../services/achievement.service';

@Component({
    selector: 'one-achievement',
    templateUrl: 'oneAchievement.page.html',
    styleUrls: ['oneAchievement.page.scss']
})
export class OneAchievementPage {

    private achievement: IAchievement;
    private tmpAchievement: IAchievement;
    private displayMode: PageDisplayMode;
    private achievementName: string;
    private achievementOrder: number;

    constructor(private route: ActivatedRoute, private navCtrl: NavController, private router: Router, private as: AchievementService){
        this.achievement = this.route.snapshot.params as IAchievement;

        if (this.achievement.name == '' || this.achievement.name == 'null') {
            this.displayMode = PageDisplayMode.new;
            this.achievementName = '';
            this.achievementOrder = 1;
        } else {
            this.displayMode = PageDisplayMode.edit;
            this.achievementName = this.achievement.name;
            this.achievementOrder = parseInt((this.achievement.order).toString());
            this.tmpAchievement = this.achievement;
        }
    }

    ionViewWillEnter(){
        if (this.achievement.name == 'null') {this.achievement = {
            order: this.achievement.order,
            tag: this.achievement.tag,
            name: ''
        }};
    }

    save(){
        this.achievement = {
            order: this.achievementOrder,
            tag: this.achievement.tag,
            name: this.achievementName
        };
        switch(this.displayMode){
            case PageDisplayMode.edit: {
                // let nominated: number = db.mockAchievements.findIndex(obj => obj.name == this.tmpAchievement.name && obj.tag == this.tmpAchievement.tag);
                let nominated: number = db.mockAchievements.findIndex(obj => obj.order == this.achievement.order);
                // db.mockAchievements.splice(nominated, 1);
                db.mockAchievements[nominated] = {
                    order: this.achievementOrder,
                    tag: this.achievement.tag,
                    name: this.achievementName
                }
                // console.log("Po zmianie: ", db.mockAchievements);
                
                break;
            }
            case PageDisplayMode.new: {
                db.mockAchievements.unshift(this.achievement);
                this.as.setNewOrder();
                // console.log("Po dodaniu nowego: ", db.mockAchievements);
                break;
            }
        }
        
        this.router.navigateByUrl('achievements');
    }

    cancel(){
        this.navCtrl.back();
    }

    segmentChanged(val: any){
        // console.log("Nadaje: ", val.detail.value);
        this.achievement = {
            ...this.achievement, tag: val.detail.value
        }
    }
}