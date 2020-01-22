import { Component } from "@angular/core";
import { ITask } from 'src/app/taskplan/models/taskplan.model';
import { TaskplanService } from 'src/app/taskplan/sevices/taskplan.service';
import { ModalController } from '@ionic/angular';
import { ModalTaskMode } from 'src/app/shared/components/models/component-model';
import { ModalTaskService } from 'src/app/shared/components/modal-task/services/modal-task.service';

@Component({
    selector: 'homePage',
    templateUrl: 'homepage.page.html',
    styleUrls: ['homepage.page.scss']
})
export class HomePage {

    private todayTasks: Array<ITask>;
    

    constructor(private taskService: TaskplanService, 
        private modalCtr: ModalController, 
        private modalTaskService: ModalTaskService){
        this.loadData();
    }

    loadData(){
        this.taskService.getTodayTasks().then(x => {
            this.todayTasks = x;
        });
    }

    modalRecall(){
        this.modalTaskService.showMe(ModalTaskMode.addNew, null);
    }
}