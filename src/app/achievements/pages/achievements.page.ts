import { Component, OnInit, ViewChild } from "@angular/core";
import { AchievementCategory } from '../models/achievement.model';
import { IonInfiniteScroll } from '@ionic/angular';
import { AchievementService } from '../services/achievement.service';

@Component({
    selector: 'achievements-page',
    templateUrl: 'achievements.page.html',
    styleUrls: ['achievements.page.scss']
})
export class AchievementsPage implements OnInit{

    private achievementCategories: Array<string>;
    @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
    dataList: any;

    constructor(private achievementService: AchievementService){

      this.dataList = [];
      this.achievementService.getAchievements().subscribe(res => {
        this.dataList = res;
      });
      // for (let i = 0; i < 25; i++) { 
      //   this.dataList.push("Item number "+this.dataList.length);
      // }
    }

    ngOnInit(){
        this.achievementCategories = Object.keys(AchievementCategory);
        console.log(this.achievementCategories);
    }

    loadData(event) {
        setTimeout(() => {
          console.log('Done');
          for (let i = 0; i < 25; i++) { 
            this.dataList.push("Item number "+this.dataList.length);
          }
          event.target.complete();
    
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          if (this.dataList.length == 1000) {
            event.target.disabled = true;
          }
        }, 500);
      }

}



