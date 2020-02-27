import { Injectable } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { mockAffirmations } from 'src/app/mocks/para-database';
import { Observable } from 'rxjs'

@Injectable()
export class AffirmationService {

    private affirmationsToPresent: Array<IAffirmation>;

    getAffirmations(): Observable<Array<IAffirmation>> {
        return new Observable(obs => {
            obs.next(mockAffirmations);
        })
    }

    setAffirmationsToPresent(pack: Array<IAffirmation>){
        this.affirmationsToPresent = pack.filter(el => 
            el.toPresent == true
        );
        console.log("Paczka to: ", this.affirmationsToPresent);
    }

    getAffirmationsToPresent(): Promise<Array<IAffirmation>> {
        return Promise.resolve(this.affirmationsToPresent);
    }
}