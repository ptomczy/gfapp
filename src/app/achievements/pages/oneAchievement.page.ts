import { Component, Input } from "@angular/core";
import { IAchievement } from '../models/achievement.model';
import { ActivatedRoute } from '@angular/router';
import { PageDisplayMode } from 'src/app/shared/models/shared.model';
import { NavController } from '@ionic/angular';
import * as db from '../../mocks/para-database';
import { AchievementsPage } from './achievements.page';

@Component({
    selector: 'one-achievement',
    templateUrl: 'oneAchievement.page.html',
    styleUrls: ['oneAchievement.page.scss']
})
export class OneAchievementPage {

    private achievement: IAchievement;
    private displayMode: PageDisplayMode;

    constructor(private route: ActivatedRoute, private navCtrl: NavController){
        this.achievement = this.route.snapshot.params as IAchievement;

        if (this.achievement.name || this.achievement.name == null) {
            this.displayMode = PageDisplayMode.new;
        } else {
            this.displayMode = PageDisplayMode.edit;
        }
    }

    ionViewWillEnter(){
        if (this.achievement.name == 'null') {this.achievement = {
            tag: this.achievement.tag,
            name: ''
        }};
        console.log("Display mode: ", this.displayMode);
    }

    save(){
        db.mockAchievements.push(this.achievement);
        // console.log("Kurent wiu: ", this.ap.achievementListCurrentView);
        // this.ap.visibilityChange(this.ap.achievementListCurrentView);
        
        this.navCtrl.back();
    }

    cancel(){
        this.navCtrl.back();
    }

    segmentChanged(val: any){
        console.log("Nadaje: ", val.detail.value);
        this.achievement = {
            ...this.achievement, tag: val.detail.value
        }
    }
    
}