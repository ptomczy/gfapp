import { Component, Input } from "@angular/core";
import { ModalController } from '@ionic/angular';

import { ITask, TaskStatus, TaskCategory } from 'src/app/taskplan/models/taskplan.model';
import { ModalTaskMode } from '../models/component-model';

@Component({
    selector: 'modal-task-component',
    templateUrl: 'modal-task.component.html',
    styleUrls: ['modal-task.component.scss']
})
export class ModalTaskComponent {

    @Input() modalTaskMode: ModalTaskMode;
    @Input() task: ITask | null;
    private setOfParams = {
        tsk: this.task
    }

    constructor(private modalController: ModalController){
    }

    ionViewWillEnter(){
        switch(this.modalTaskMode){
            case ModalTaskMode.addNew: {
                console.log("Tryb nowego");
                break;
            }
            case ModalTaskMode.edit: {
                console.log("Tryb edycji");
                break;
            }
        }
    }

    closeModalTask(){
        this.setOfParams = {
            tsk: this.task
        }
        this.modalController.dismiss(this.setOfParams);
    }

    segmentChanged(ev: any) {
        console.log("Selected segment: ", ev.detail.value);
    }
}