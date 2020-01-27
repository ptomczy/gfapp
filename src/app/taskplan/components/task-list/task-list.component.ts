import { Component, Input } from "@angular/core";
import { ITask, taskScopeInfo } from '../../models/taskplan.model';
import { ModalTaskService } from 'src/app/shared/components/modal-task/services/modal-task.service';
import { ModalTaskMode } from 'src/app/shared/components/models/component-model';

@Component({
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.scss']
})
export class TaskListComponent {

    @Input() scopeModeInfo: taskScopeInfo;
    @Input() tasks: Array<ITask> = [];

    constructor(private ModalTaskService: ModalTaskService){
    }

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
        this.ModalTaskService.showMe(ModalTaskMode.edit, tsk);

    }

    delete(tsk: ITask){
        console.log("Wybrane do skasowania: ", tsk);
    }
}