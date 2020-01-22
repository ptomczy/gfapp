import { Component, Input } from "@angular/core";
import { ModalController } from '@ionic/angular';

import { ITask } from 'src/app/taskplan/models/taskplan.model';
import { ModalMode } from '../models/component-model';

@Component({
    selector: 'modal-component',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss']
})
export class ModalComponent {

    @Input()modalMode: ModalMode;
    @Input()par1: string;
    private par2: string = "To jest parametr wychodzący";
    private setOfParams: {p1: string, p2: string};
    private task: ITask;

    constructor(private modalController: ModalController){
    }

    ionViewWillEnter(){
        switch(this.modalMode){
            case ModalMode.addNew: {
                console.log("Tryb nowego");
                break;
            }
            case ModalMode.edit: {
                console.log("Tryb edycji");
                break;
            }
        }
    }

    closeModal(){
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