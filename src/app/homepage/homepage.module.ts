import { NgModule } from "@angular/core";
import { HomePage } from './pages/homepage.page';
import { HomePageRoutingModule } from './homepage-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TaskplanModule } from '../taskplan/taskplan.module';
import { TaskComponent } from '../taskplan/components/task/task.component';

@NgModule({
    declarations: [HomePage],
    imports: [HomePageRoutingModule, IonicModule, CommonModule, SharedModule, TaskplanModule],
    entryComponents: [HomePage]
})
export class HomePageModule {

}