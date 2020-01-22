import { NgModule } from "@angular/core";
import { FooterFlexComponent } from './components/footer-flex/footerflex.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalTaskComponent } from './components/modal-task/modal-task.component';

@NgModule({
    declarations: [FooterFlexComponent, ModalTaskComponent],
    imports: [IonicModule, CommonModule],
    exports: [FooterFlexComponent, ModalTaskComponent],
    entryComponents: [ModalTaskComponent]
    
})
export class SharedModule {

}