import { NgModule } from "@angular/core";
import { FooterFlexComponent } from './components/footer-flex/footerflex.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [FooterFlexComponent, ModalComponent],
    imports: [IonicModule, CommonModule],
    exports: [FooterFlexComponent, ModalComponent]
})
export class SharedModule {

}