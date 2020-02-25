import { Injectable } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { Observable } from 'rxjs/internal/Observable';
import { mockAffirmations } from 'src/app/mocks/para-database';

@Injectable()
export class AffirmationService {

    getAffirmations(): Observable<Array<IAffirmation>> {
        return new Observable(obs => {
            obs.next(mockAffirmations);
        })
    }
}