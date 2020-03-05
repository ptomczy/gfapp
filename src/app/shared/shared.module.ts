import { NgModule } from "@angular/core";
import { FooterFlexComponent } from './components/footer-flex/footerflex.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalTaskComponent } from './components/modal-task/modal-task.component';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './services/database.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { ToastService } from './services/toast.service';

@NgModule({
    declarations: [FooterFlexComponent, ModalTaskComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [FooterFlexComponent, ModalTaskComponent],
    providers: [DatabaseService, AuthService, AuthGuard, ToastService],
    entryComponents: [ModalTaskComponent]
    
})
export class SharedModule {

}