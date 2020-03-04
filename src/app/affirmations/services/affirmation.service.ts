import { Injectable } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { mockAffirmations, mockAffirmationsLibrary } from 'src/app/mocks/para-database';
import { Observable } from 'rxjs'
import { resolve } from 'url';

@Injectable()
export class AffirmationService {

    private affirmationsToPresent: Array<IAffirmation>;
    private alreadyRecalledDataToPresent: boolean = false;

    getAffirmations(): Observable<Array<IAffirmation>> {
        return new Observable(obs => {
            obs.next(mockAffirmations);
            this.affirmationsToPresent = mockAffirmations;
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

    addAffirmations(pack: Array<IAffirmation>){
        this.getAffirmations().subscribe(() => {
            let tmpCtr: number = 0;
            let affLen: number = this.affirmationsToPresent.length;
            pack.forEach(el => {
                el.order = affLen + ++tmpCtr;
                el.toPresent = true;
            });
            this.affirmationsToPresent.push(...pack);
        });
    }

    deleteAffirmationFromPresented(aff: IAffirmation){
        let idxToDel = this.affirmationsToPresent.findIndex(el => el.name == aff.name);
        console.log("Do skasowania: ", idxToDel);
        this.affirmationsToPresent.splice(idxToDel, 1);
        console.log("Affirmations to present: ", this.affirmationsToPresent);
    }

}