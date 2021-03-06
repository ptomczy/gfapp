import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/homepage.page';

const routes: Routes = [
    {path: '', component: HomePage, pathMatch: 'full'},
    {path: 'home', redirectTo: ''}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class HomePageRoutingModule {

}