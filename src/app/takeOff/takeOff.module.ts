import { NgModule } from "@angular/core";
import { TakeOffPage } from './pages/takeOff.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TakeOffRoutingModule } from './takeOff-routing.module';
import { LoginModule } from '../login/login.module';

@NgModule({
    declarations: [TakeOffPage],
    imports: [IonicModule, CommonModule, FormsModule, TakeOffRoutingModule, LoginModule]
})
export class TakeOffModule {
    
}