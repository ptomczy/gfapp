import { Component, OnInit, ViewChild, OnDestroy, Directive, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { AchievementCategory, IAchievement } from '../models/achievement.model';
import { IonInfiniteScroll } from '@ionic/angular';
import { AchievementService } from '../services/achievement.service';

@Component({
    selector: 'achievements-page',
    templateUrl: 'achievements.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['achievements.page.scss']
})
export class AchievementsPage implements OnInit, OnDestroy {

    private achievementCategories: Array<string>;
    //@ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
    dataList: Array<IAchievement>;
    private incomingDataList: Array<IAchievement> = [];
    private allAchievementsSelected: boolean;
    private personalAchievementsSelected: boolean;
    private professionalAchievementsSelected: boolean;

    constructor(private achievementService: AchievementService, private cd: ChangeDetectorRef){

      this.allAchievementsSelected = true;
      this.personalAchievementsSelected = false;
      this.professionalAchievementsSelected = false;

      this.dataList = [];
      this.achievementService.getAchievements().subscribe(res => {
        this.dataList = res;
        this.incomingDataList = res;
      });
    }

    ngOnInit(){
        this.achievementCategories = Object.keys(AchievementCategory);
    }

    loadData(event) {
        setTimeout(() => {
          // console.log('Done');
          // for (let i = 0; i < 25; i++) { 
          //   this.dataList.push("Item number "+this.dataList.length);
          // }
          event.target.complete();

          if (this.dataList.length == 1000) {
            event.target.disabled = true;
          }
        }, 500);
      }

    visibilityChange(obj: string){
      switch(obj){
        case 'all':{
          this.allAchievementButtonsNotSelected();
          this.allAchievementsSelected = true;
          this.dataList = this.incomingDataList;          
          break;
        };
        case 'personal':{
          this.allAchievementButtonsNotSelected();
          this.personalAchievementsSelected = true;
          this.dataList = this.incomingDataList;
          let personalAchievements = this.dataList.filter(el => el.tag == AchievementCategory.personal);
          this.dataList = personalAchievements;
          break;
        };
        case 'professional':{
          this.allAchievementButtonsNotSelected();
          this.professionalAchievementsSelected = true;
          this.dataList = this.incomingDataList;
          let professionalAchievements = this.dataList.filter(el => el.tag == AchievementCategory.professional);
          this.dataList = professionalAchievements;
          break;
        }
      }
    }

    allAchievementButtonsNotSelected() {
      this.allAchievementsSelected = false;
      this.professionalAchievementsSelected = false;
      this.personalAchievementsSelected = false;
    }

    addNewAchievement(){
      console.log("Dodany nowy");
    }

    ngOnDestroy(){

    }

}



