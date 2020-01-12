import { Component } from "@angular/core";
import { ITask } from 'src/app/taskplan/models/taskplan.model';
import { TaskplanService } from 'src/app/taskplan/sevices/taskplan.service';

@Component({
    selector: 'homePage',
    templateUrl: 'homepage.page.html',
    styleUrls: ['homepage.page.scss']
})
export class HomePage {

    private todayTasks: Array<ITask>;

    constructor(private taskService: TaskplanService){
    }

    clickedButton(){
        this.taskService.getTodayTasks().then(x => {
            this.todayTasks = x;
        });
    }
}