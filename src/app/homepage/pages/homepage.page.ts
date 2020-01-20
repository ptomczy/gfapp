import { Component } from "@angular/core";
import { ITask } from 'src/app/taskplan/models/taskplan.model';
import { TaskplanService } from 'src/app/taskplan/sevices/taskplan.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
    selector: 'homePage',
    templateUrl: 'homepage.page.html',
    styleUrls: ['homepage.page.scss']
})
export class HomePage {

    private todayTasks: Array<ITask>;
    

    constructor(private taskService: TaskplanService, private modalCtr: ModalController){
        this.loadData();
    }

    loadData(){
        this.taskService.getTodayTasks().then(x => {
            this.todayTasks = x;
        });
    }

    modalRecall(add: string){
        this.presentModal();
    }

    async presentModal() {
        const modal = await this.modalCtr.create({
          component: ModalComponent,
          componentProps: {
              par1: "To przychodzi z wywołania"
          }
        });
        modal.onDidDismiss().then(x => console.log("Przyszło: ", x.data));
        return await modal.present();
      }
}