import { NgModule } from "@angular/core";
import { FooterFlexComponent } from './components/footer-flex/footerflex.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalTaskComponent } from './components/modal-task/modal-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [FooterFlexComponent, ModalTaskComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [FooterFlexComponent, ModalTaskComponent],
    entryComponents: [ModalTaskComponent]
    
})
export class SharedModule {

}