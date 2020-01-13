import { Component, Input } from "@angular/core";
import { ITask } from '../../models/taskplan.model';

@Component({
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.scss']
})
export class TaskListComponent {

    @Input() scopeInfo: string = 'Testowe info';
    @Input() tasks: Array<ITask> = [];

    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
         let draggedItem = this.tasks.splice(event.detail.from,1)[0];
         this.tasks.splice(event.detail.to,0,draggedItem)
        //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
        event.detail.complete();
      }
}