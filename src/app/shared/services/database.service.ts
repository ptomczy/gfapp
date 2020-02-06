import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DatabaseService {
    constructor(private _fireDatabase: AngularFireDatabase){
    }


}