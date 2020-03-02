import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AffirmationsPage } from './pages/affirmations.page';
import { AffirmationPresentationPage } from './pages/affirmation-presentation.page';
import { OneAffirmationPage } from './pages/oneAffirmation.page';
import { AffirmationsLibraryPage } from './pages/affirmation-library.page';

const routes: Routes = [
    {path: '', component: AffirmationsPage, pathMatch: 'full' },
    {path: 'affpresentation', component: AffirmationPresentationPage, pathMatch: 'full'},
    {path: 'one-affirmation', component: OneAffirmationPage, pathMatch: 'full'},
    {path: 'affirmations-library', component: AffirmationsLibraryPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AffirmationRoutingModule {

}