import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { AchievementCategory, IAchievement } from '../models/achievement.model';
import { IonInfiniteScroll } from '@ionic/angular';
import { AchievementService } from '../services/achievement.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'achievements-page',
    templateUrl: 'achievements.page.html',
    styleUrls: ['achievements.page.scss']
})
export class AchievementsPage implements OnInit, OnDestroy {

    private achievementCategories: Array<string>;
    //@ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
    private dataList: Array<IAchievement>;
    private allAchievementsSelected: boolean;
    private personalAchievementsSelected: boolean;
    private professionalAchievementsSelected: boolean;
    private selectedAchievement: IAchievement;
    achievementListCurrentView: string;

    constructor(private achievementService: AchievementService, private cd: ChangeDetectorRef, private router: Router, private route: ActivatedRoute){

      this.allAchievementsSelected = true;
      this.personalAchievementsSelected = false;
      this.professionalAchievementsSelected = false;

      this.dataList = [];
      this.selectedAchievement = {
        order: 1,
        tag: AchievementCategory.personal,
        name: ''
      }
      this.achievementService.getAchievements().subscribe(res => {
        this.dataList = res;
      });
    }

    ngOnInit(){
        this.achievementCategories = Object.keys(AchievementCategory);
    }

    ionViewWillEnter(){
      if(this.achievementListCurrentView) {
        this.visibilityChange(this.achievementListCurrentView);
      }
    }

    loadData(event) {
        setTimeout(() => {
          event.target.complete();

          if (this.dataList.length == 1000) {
            event.target.disabled = true;
          }
        }, 500);
      }

    visibilityChange(obj: string){
      this.achievementListCurrentView = obj;

      switch(obj){
        case 'all':{
          this.allAchievementButtonsNotSelected();
          this.allAchievementsSelected = true;
          this.achievementService.getAchievements().subscribe(res => {
            this.dataList = res;
          })         
          break;
        };
        case 'personal':{
          this.allAchievementButtonsNotSelected();
          this.personalAchievementsSelected = true;
          this.achievementService.getAchievements().subscribe(res => {
            this.dataList = res.filter(el => el.tag == AchievementCategory.personal);
          })
          break;
        };
        case 'professional':{
          this.allAchievementButtonsNotSelected();
          this.professionalAchievementsSelected = true;
          this.achievementService.getAchievements().subscribe(res => {
            this.dataList = res.filter(el => el.tag == AchievementCategory.professional);
          })
          break;
        }
      }
      this.cd.detectChanges();
    }

    allAchievementButtonsNotSelected() {
      this.allAchievementsSelected = false;
      this.professionalAchievementsSelected = false;
      this.personalAchievementsSelected = false;
    }

    addNewAchievement(){
      this.router.navigate(['achievements/one-achievement', {tag: AchievementCategory.personal, name: null}]);      
    }

    ngOnDestroy(){

    }

}



