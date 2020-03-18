import { NgModule } from "@angular/core";
import { WorkplanPage } from './pages/workplan.page';
import { WorkplanRoutingModule } from './workplan-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { GoalComponent } from './components/goal/goal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
//import { GanttModule } from "@syncfusion/ej2-angular-gantt";


@NgModule({
    declarations: [WorkplanPage, GoalComponent],
    imports: [
        WorkplanRoutingModule, 
        CommonModule, 
        IonicModule, 
        SharedModule,
        DragDropModule, 
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ] //, GanttModule]
})
export class WorkplanModule {

}