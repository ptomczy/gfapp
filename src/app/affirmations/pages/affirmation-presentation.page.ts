import { Component, OnInit, OnDestroy } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AffirmationService } from '../services/affirmation.service';

@Component({
    selector: 'presentation-page',
    templateUrl: 'affirmation-presentation.page.html',
    styleUrls: ['affirmation-presentation.page.scss']
})
export class AffirmationPresentationPage {

    private affirmations: Array<IAffirmation> = [];
    private affirmationToPresent: IAffirmation;
    private amountOfAffirmations: number;
    private presentationCounter: number = 0;
    private timeInterval;

    constructor(private router: Router, private affirmationService: AffirmationService){
        this.affirmationService.getAffirmationsToPresentDirectly().then(res => {
            this.affirmations = res;
            this.amountOfAffirmations = this.affirmations.length;
            this.affirmationToPresent = this.affirmations[this.presentationCounter];
        })
    }

    recallAffirmationsPage(){
        this.router.navigate(['affirmations']);
    }

    ionViewDidEnter(){
        this.timeInterval = setInterval(() => {
            this.presentNextAffirmation();
        }, 1000);
    }

    ionViewDidLeave(){
        clearInterval(this.timeInterval);
    }

    presentNextAffirmation(){
        this.presentationCounter++;
        
        if (this.presentationCounter == this.amountOfAffirmations){
            this.presentationCounter = 0;
        };

        this.affirmationToPresent = this.affirmations[this.presentationCounter];

    }
}