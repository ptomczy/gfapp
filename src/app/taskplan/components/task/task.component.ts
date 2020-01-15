import { Component, Input } from "@angular/core";

@Component({
    selector: 'task-comp',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.scss']
})
export class TaskComponent {

    @Input() taskName: string;

    test(arg: string){
        console.log("To pochodzi z ", arg);
    }
}