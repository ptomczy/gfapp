import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { IError } from '../models/shared.model';


@Injectable()
export class AuthService {
    user: Observable<firebase.User>;
    private _userDetails: firebase.User = null;
    private _errorData: IError;

    constructor(private _firebaseAuth: AngularFireAuth, private _router: Router){
        this.user = _firebaseAuth.authState;

        this.user.subscribe(
            (user) => {
                if(user) {
                    this._userDetails = user;
                } else {
                    this._userDetails = null;
                }
            }
        )
    }

    createNewUserWithEmail(email, password){
        this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
        .catch(error => {
            this._errorData = {
                code: error.errorCode,
                message: error.errorMessage
            }
        })
    }

    signInWithEmail(email, password){
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            this._errorData = {
                code: error.errorCode,
                message: error.errorMessage
            }
        })
    }

    signInWithGoogle(){
        return this._firebaseAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
    }

    sighInWithFacebook(){
        return this._firebaseAuth.auth.signInWithPopup(
            new firebase.auth.FacebookAuthProvider()
        )
    }

    get isLoggedIn(){
        if(this._userDetails == null) {
            return false;
        } else {
            return true;
        }
    }

    logout(){
        return this._firebaseAuth.auth.signOut()
        .then(() => this._router.navigate(['/']));
    }

    get loggedUser(): firebase.User {
        return this._firebaseAuth.auth.currentUser;
    }
}