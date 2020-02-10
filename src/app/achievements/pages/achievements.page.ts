import { Component, OnInit, ViewChild } from "@angular/core";
import { AchievementCategory } from '../models/achievement.model';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'achievements-page',
    templateUrl: 'achievements.page.html',
    styleUrls: ['achievements.page.scss']
})
export class AchievementsPage implements OnInit{

    private achievementCategories: Array<string>;
    @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

    ngOnInit(){
        this.achievementCategories = Object.keys(AchievementCategory);
        console.log(this.achievementCategories);
    }

    loadData(event) {
        setTimeout(() => {
          console.log('Done');
          event.target.complete();
    
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
        //   if (data.length == 1000) {
        //     event.target.disabled = true;
        //   }
        }, 500);
      }

}



