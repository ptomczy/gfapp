import { Component } from "@angular/core";
import { ITask, TaskStatus, TaskCategory, taskScopeInfo } from 'src/app/taskplan/models/taskplan.model';
import { TaskplanService } from 'src/app/taskplan/sevices/taskplan.service';
import { ModalController } from '@ionic/angular';
import { ModalTaskMode } from 'src/app/shared/components/models/component-model';
import { ModalTaskService } from 'src/app/shared/components/modal-task/services/modal-task.service';
import { TaskListViewMode } from '../../taskplan/models/taskplan.model';
import { Router } from '@angular/router';

const emptyTask: ITask = {
        userId: '',
        id: '',
        goalId: '',
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
    private taskListScopeInfo: taskScopeInfo = taskScopeInfo.today;

    constructor(private taskService: TaskplanService,  
        private modalTaskService: ModalTaskService, private router: Router){
            this.displayTaskList(TaskListViewMode.todayTasks);
    }

    modalRecall(){
        this.modalTaskService.showMe(ModalTaskMode.addNew, emptyTask);
    }

    changeTaskList(){
        if(this.taskListScopeInfo == taskScopeInfo.today){
            this.displayTaskList(TaskListViewMode.tommorowTasks);
            this.taskListScopeInfo = taskScopeInfo.tommorow;
        } else {
            this.displayTaskList(TaskListViewMode.todayTasks);
            this.taskListScopeInfo = taskScopeInfo.today;
        }
    }

    displayTaskList(mode: TaskListViewMode){
        switch(mode){
            case TaskListViewMode.todayTasks: {
                
                this.taskService.getTodayTasks().then(x => {
                    this.todayTasks = x;
                    this.taskListScopeInfo = taskScopeInfo.today;
                });
                break;
            }
            case TaskListViewMode.tommorowTasks: {
                this.taskListScopeInfo = taskScopeInfo.tommorow;
                this.taskService.getTommorowTasks().then(y => {
                    this.todayTasks = y
                });
                break;
            }
            default:
                console.log("Dupa");
        }

    }

    exitButtonClicked(){
        this.router.navigate(['/']);
    }
}