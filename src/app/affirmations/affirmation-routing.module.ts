import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AffirmationsPage } from './pages/affirmations.page';

const routes: Routes = [
    {path: '', component: AffirmationsPage, pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AffirmationRoutingModule {

}