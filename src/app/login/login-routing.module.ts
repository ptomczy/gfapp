import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from './pages/login.page';

const routes: Routes = [
    {path: '', component: LoginPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class LoginRoutingModule{

}