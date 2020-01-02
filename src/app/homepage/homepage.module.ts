import { NgModule } from "@angular/core";
import { HomePage } from './pages/homepage.page';
import { HomePageRoutingModule } from './homepage-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [HomePage],
    imports: [HomePageRoutingModule, IonicModule, CommonModule, SharedModule],
    entryComponents: [HomePage]
})
export class HomePageModule {

}