import { NgModule } from "@angular/core";
import { AffirmationRoutingModule } from './affirmation-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AffirmationsPage } from './pages/affirmations.page';
import { OneAffirmationPage } from './pages/oneAffirmation.page';
import { FormsModule } from '@angular/forms';
import { AffirmationService } from './services/affirmation.service';
import { AffirmationListComponent } from './components/affirmation-list.component';
import { AffirmationPresentationPage } from './pages/affirmation-presentation.page';

@NgModule({
    declarations: [AffirmationsPage, OneAffirmationPage, AffirmationListComponent, AffirmationPresentationPage],
    imports: [AffirmationRoutingModule, CommonModule, IonicModule, FormsModule],
    providers: [AffirmationService]
})
export class AffirmationModule {

}