import { NgModule } from "@angular/core";
import { AffirmationRoutingModule } from './affirmation-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AffirmationsPage } from './pages/affirmations.page';
import { OneAffirmationPage } from './pages/oneAffirmation.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AffirmationService } from './services/affirmation.service';
import { AffirmationListComponent } from './components/affirmation-list.component';
import { AffirmationPresentationPage } from './pages/affirmation-presentation.page';
import { AffirmationsLibraryPage } from './pages/affirmation-library.page';

@NgModule({
    declarations: [AffirmationsPage, OneAffirmationPage, AffirmationListComponent, AffirmationPresentationPage, AffirmationsLibraryPage],
    imports: [AffirmationRoutingModule, CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
    providers: [AffirmationService]
})
export class AffirmationModule {

}