import { NgModule } from "@angular/core";
import { AffirmationRoutingModule } from './affirmation-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AffirmationsPage } from './pages/affirmations.page';

@NgModule({
    declarations: [AffirmationsPage],
    imports: [AffirmationRoutingModule, CommonModule, IonicModule]
})
export class AffirmationModule {

}