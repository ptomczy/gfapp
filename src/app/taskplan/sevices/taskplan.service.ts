import { Injectable } from "@angular/core";
import { ITask } from '../models/taskplan.model';
import { mockTasks } from 'src/app/mocks/para-database';
import { TaskplanModule } from '../taskplan.module';

@Injectable({
    providedIn: TaskplanModule
})
export class TaskplanService {

    getTodayTasks() {
        let tasksAvailable: Promise<ITask[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockTasks);
            reject("Dupa, brak danych");
        }, 1500);
        });
        return tasksAvailable;
        
    }

}