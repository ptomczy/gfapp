import { NgModule } from "@angular/core";
import { AffirmationRoutingModule } from './affirmation-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AffirmationsPage } from './pages/affirmations.page';
import { OneAffirmationPage } from './pages/oneAffirmation.page';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AffirmationsPage, OneAffirmationPage],
    imports: [AffirmationRoutingModule, CommonModule, IonicModule, FormsModule]
})
export class AffirmationModule {

}