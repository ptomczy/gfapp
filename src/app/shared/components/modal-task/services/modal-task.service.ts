import { Injectable } from "@angular/core";
import { ModalTaskMode } from '../../models/component-model';
import { ModalController } from '@ionic/angular';
import { ModalTaskComponent } from '../modal-task.component';
import { ITask } from 'src/app/taskplan/models/taskplan.model';

@Injectable({
    providedIn: 'root'
})
export class ModalTaskService {

    constructor(private modalCtr: ModalController){

    }
    
    showMe(mode: ModalTaskMode, task: ITask){
        this.presentModal(mode, task);
    }

    async presentModal(mMode: number, task: ITask) {
        const modal = await this.modalCtr.create({
          component: ModalTaskComponent,
          componentProps: {
              par1: "To przychodzi z wywołania",
              modalTaskMode: mMode, 
              task: task
          }
        });
        modal.onDidDismiss().then(x => {
            console.log("Przyszło: ", x.data);
        })
            
        return await modal.present();
      }
}