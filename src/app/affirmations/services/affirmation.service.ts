import { Injectable } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { mockAffirmations } from 'src/app/mocks/para-database';
import { Observable } from 'rxjs'
import { resolve } from 'url';

@Injectable()
export class AffirmationService {

    private affirmationsToPresent: Array<IAffirmation>;
    private alreadyRecalledDataToPresent: boolean = false;

    getAffirmations(): Observable<Array<IAffirmation>> {
        return new Observable(obs => {
            obs.next(mockAffirmations);
        })
    }

    setAffirmationsToPresent(pack: Array<IAffirmation>){
        this.affirmationsToPresent = pack.filter(el => 
            el.toPresent == true
        );
    }

    getAffirmationsToPresentDirectly(): Promise<Array<IAffirmation>> {
        return new Promise((res) => {
            if(!this.alreadyRecalledDataToPresent) this.affirmationsToPresent = mockAffirmations.filter(el => 
                el.toPresent == true
            );
            this.alreadyRecalledDataToPresent = true;
            res(this.affirmationsToPresent);
        })
    }

}