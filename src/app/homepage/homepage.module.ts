import { NgModule } from "@angular/core";
import { HomePage } from './pages/homepage.page';
import { HomePageRoutingModule } from './homepage-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterFlexComponent } from './components/footerflex.component';

@NgModule({
    declarations: [HomePage, FooterFlexComponent],
    imports: [HomePageRoutingModule, IonicModule, CommonModule],
    entryComponents: [HomePage, FooterFlexComponent]
})
export class HomePageModule {

}