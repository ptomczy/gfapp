import { Component, Input } from "@angular/core";
import { ModalController } from '@ionic/angular';

import { ITask } from 'src/app/taskplan/models/taskplan.model';
import { ModalTaskMode } from '../models/component-model';

@Component({
    selector: 'modal-task-component',
    templateUrl: 'modal-task.component.html',
    styleUrls: ['modal-task.component.scss']
})
export class ModalTaskComponent {

    @Input() modalTaskMode: ModalTaskMode;
    @Input() par1: string;
    @Input() task: ITask | null;
    private par2: string = "To jest parametr wychodzący";
    private setOfParams: {p1: string, p2: string};

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
            p1: this.par1,
            p2: this.par2
        }
        this.modalController.dismiss(this.setOfParams);
    }

    segmentChanged(ev: any) {
        console.log("Selected segment: ", ev.detail.value);
    }
}