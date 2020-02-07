import { Component } from "@angular/core";
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'login-email',
    templateUrl: 'login-email.component.html',
    styleUrls: ['login-email.component.scss']
})
export class LoginEmailComponent {

    private _email: string;
    private _password: string;
    _info: string;

    constructor(private _firebaseAuthService: AuthService){
    }

    signInWithEmail(){
        this._firebaseAuthService.signInWithEmail(this._email, this._password)
        .then(() => this._info = "Użytkownik zalogowany");
    }

    logout(){
        this._firebaseAuthService.logout()
        .then(() => this._info = "Użytkownik WYLOGOWANY");
    }


}