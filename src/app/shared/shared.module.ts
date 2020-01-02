import { NgModule } from "@angular/core";
import { FooterFlexComponent } from './components/footerflex.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [FooterFlexComponent],
    imports: [IonicModule, CommonModule],
    exports: [FooterFlexComponent]
})
export class SharedModule {

}