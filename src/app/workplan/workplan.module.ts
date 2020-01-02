import { NgModule } from "@angular/core";
import { WorkplanPage } from './pages/workplan.page';
import { WorkplanRoutingModule } from './workplan-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { GanttModule } from "@syncfusion/ej2-angular-gantt";


@NgModule({
    declarations: [WorkplanPage],
    imports: [WorkplanRoutingModule, CommonModule, IonicModule, SharedModule, GanttModule]
})
export class WorkplanModule {

}