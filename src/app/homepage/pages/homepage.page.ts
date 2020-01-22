import { Component } from "@angular/core";
import { ITask } from 'src/app/taskplan/models/taskplan.model';
import { TaskplanService } from 'src/app/taskplan/sevices/taskplan.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalMode } from 'src/app/shared/components/models/component-model';
import { ModalService } from 'src/app/shared/components/modal/services/modal.service';

@Component({
    selector: 'homePage',
    templateUrl: 'homepage.page.html',
    styleUrls: ['homepage.page.scss']
})
export class HomePage {

    private todayTasks: Array<ITask>;
    

    constructor(private taskService: TaskplanService, private modalCtr: ModalController, private modalService: ModalService){
        this.loadData();
    }

    loadData(){
        this.taskService.getTodayTasks().then(x => {
            this.todayTasks = x;
        });
    }

    modalRecall(){
        this.modalService.showMe(ModalMode.addNew);
    }
}