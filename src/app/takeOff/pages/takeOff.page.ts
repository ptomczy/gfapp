import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'takeOff-page',
    templateUrl: 'takeOff.page.html',
    styleUrls: ['takeOff.page.scss']
})
export class TakeOffPage implements OnInit {
    private _user: firebase.User;

    constructor(private _firebaseAuth: AuthService){

    }

    ngOnInit(){
        this._firebaseAuth.user.subscribe(res => this._user = res)
    }
}