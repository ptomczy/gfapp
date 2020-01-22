import { Component, Input } from "@angular/core";
import { ITask } from '../../models/taskplan.model';
import { ModalService } from 'src/app/shared/components/modal/services/modal.service';
import { ModalMode } from 'src/app/shared/components/models/component-model';

@Component({
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.scss']
})
export class TaskListComponent {

    constructor(private ModalService: ModalService){

    }

    @Input() scopeInfo: string = 'Plan for today';
    @Input() tasks: Array<ITask> = [];

    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
         let draggedItem = this.tasks.splice(event.detail.from,1)[0];
         this.tasks.splice(event.detail.to,0,draggedItem)
        event.detail.complete();
      };
      test(arg: string){
        console.log("To pochodzi z ", arg);
    }

    edit(tsk: ITask){
        console.log("Wybrane do edycji: ", tsk);
        this.ModalService.showMe(ModalMode.edit);

    }

    delete(tsk: ITask){
        console.log("Wybrane do skasowania: ", tsk);
    }
}