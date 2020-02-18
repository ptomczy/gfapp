import { Injectable } from "@angular/core";
import { mockAchievements } from '../../mocks/para-database';
import { IAchievement, AchievementCategory } from '../models/achievement.model';
import { Observable } from 'rxjs';

@Injectable()
export class AchievementService {

    getAchievements(): Observable<Array<IAchievement>>{
        return new Observable(obs => {
            obs.next(mockAchievements);
        })
    }

    getAchievmentsLen(): Observable<number>{
        return new Observable(obs => {
            obs.next(mockAchievements.length);
        })
    }

    deleteAchievement(obj: IAchievement){
        let idxElToDel: number = mockAchievements.findIndex(el => el.name == obj.name);
        mockAchievements.splice(idxElToDel,1);
    }

    putAchievementsToDb(achievements: Array<IAchievement>){
        let tmpAchievements = [...achievements];
        let mockAchievementsLen = mockAchievements.length;
        mockAchievements.splice(0, mockAchievementsLen);
        mockAchievements.push(...tmpAchievements);
    }

    setNewOrder(){
        let ctr = 1;
        mockAchievements.forEach(el => {
            el.order = ctr;
            ctr++;
        });
    }

}