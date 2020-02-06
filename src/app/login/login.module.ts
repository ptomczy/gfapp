import { NgModule } from "@angular/core";
import { LoginPage } from './pages/login.page';
import { LoginEmailComponent } from './components/email/login-email.component';
import { LoginSocialComponent } from './components/social/login-social.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [LoginPage, LoginEmailComponent, LoginSocialComponent],
    imports: [CommonModule, IonicModule, FormsModule, LoginRoutingModule, SharedModule],
    exports: [LoginPage]
})
export class LoginModule {
    
}