import { Component } from "@angular/core";
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginEmailComponent } from '../email/login-email.component';
import * as loginEmailComponent from '../email/login-email.component';

@Component({
    selector: 'login-social',
    templateUrl: 'login-social.component.html',
    styleUrls: ['login-social.component.scss']
})
export class LoginSocialComponent {

    private _info: string;

    constructor(private _authService: AuthService){
        
    }

    signInWithFacebook(){
        this._authService.sighInWithFacebook()
        .then(() => {
            
        });
    }

    signInWithGoogle(){
        this._authService.signInWithGoogle();
    }

}