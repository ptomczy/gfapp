import { Component } from "@angular/core";
import { IAchievement } from '../models/achievement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PageDisplayMode } from 'src/app/shared/models/shared.model';
import { NavController } from '@ionic/angular';
import * as db from '../../mocks/para-database';

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

    constructor(private route: ActivatedRoute, private navCtrl: NavController, private router: Router){
        this.achievement = this.route.snapshot.params as IAchievement;

        if (this.achievement.name == '' || this.achievement.name == 'null') {
            this.displayMode = PageDisplayMode.new;
            this.achievementName = '';
        } else {
            this.displayMode = PageDisplayMode.edit;
            this.achievementName = this.achievement.name;
            this.tmpAchievement = this.achievement;
        }
    }

    ionViewWillEnter(){
        if (this.achievement.name == 'null') {this.achievement = {
            tag: this.achievement.tag,
            name: ''
        }};
    }

    save(){
        this.achievement = {
            tag: this.achievement.tag,
            name: this.achievementName
        };
        switch(this.displayMode){
            case PageDisplayMode.edit: {
                let nominated: number = db.mockAchievements.findIndex(obj => obj.name == this.tmpAchievement.name && obj.tag == this.tmpAchievement.tag);
                db.mockAchievements.splice(nominated, 1);
                break;
            }
        }
        db.mockAchievements.push(this.achievement);
        this.router.navigateByUrl('achievements');
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