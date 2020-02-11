import { Injectable } from "@angular/core";
import { mockAchievements } from '../../mocks/para-database';
import { IAchievement } from '../models/achievement.model';
import { Observable } from 'rxjs';

@Injectable()
export class AchievementService {

    getAchievements(): Observable<Array<IAchievement>>{
        return new Observable(obs => {
            obs.next(mockAchievements);
        })
    }

}