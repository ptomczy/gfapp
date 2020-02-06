import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TakeOffPage } from './pages/takeOff.page';

export const routes: Routes = [
    {path: '', component: TakeOffPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class TakeOffRoutingModule {

}