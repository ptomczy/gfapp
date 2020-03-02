import { Component } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { mockAffirmationsLibrary } from 'src/app/mocks/para-database';
import { AffirmationService } from '../services/affirmation.service';

@Component({
    selector: 'affirmations-library',
    templateUrl: 'affirmation-library.page.html',
    styleUrls: ['affirmation-library.page.scss']
})
export class AffirmationsLibraryPage {

    private affirmations: IAffirmation[];
    private baseAffirmations: IAffirmation[];

    constructor(private affService: AffirmationService){
        this.affService.getAffirmations().subscribe(res => {
            this.baseAffirmations = res;

            this.affirmations = mockAffirmationsLibrary.filter(el => true)
        })
        
    }

    save(){

    }

    cancel(){

    }
}