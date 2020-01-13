import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
    declarations: [TaskListComponent, TaskComponent],
    imports: [IonicModule, CommonModule],
    exports: [TaskListComponent, TaskComponent]
})
export class TaskplanModule {}