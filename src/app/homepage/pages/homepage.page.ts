import { Component } from "@angular/core";
import { ITask, TaskStatus, TaskCategory } from 'src/app/taskplan/models/taskplan.model';
import { TaskplanService } from 'src/app/taskplan/sevices/taskplan.service';
import { ModalController } from '@ionic/angular';
import { ModalTaskMode } from 'src/app/shared/components/models/component-model';
import { ModalTaskService } from 'src/app/shared/components/modal-task/services/modal-task.service';

const emptyTask: ITask = {
        id: '',
        name: '',
        date: '',
        status: TaskStatus.set,
        isObsolete: false,
        category: TaskCategory.A,
        priority: 1

    }

@Component({
    selector: 'homePage',
    templateUrl: 'homepage.page.html',
    styleUrls: ['homepage.page.scss']
})
export class HomePage {

    private todayTasks: Array<ITask>;
    

    constructor(private taskService: TaskplanService,  
        private modalTaskService: ModalTaskService){
        this.loadData();
    }

    loadData(){
        this.taskService.getTodayTasks().then(x => {
            this.todayTasks = x;
        });
    }

    modalRecall(){
        this.modalTaskService.showMe(ModalTaskMode.addNew, emptyTask);
    }
}