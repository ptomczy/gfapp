import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { WorkplanPage } from './pages/workplan.page';

const routes: Routes = [
    {path: '', component: WorkplanPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class WorkplanRoutingModule {

}