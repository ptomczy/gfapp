import { Component, Input } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'presentation-page',
    templateUrl: 'affirmation-presentation.page.html',
    styleUrls: ['affirmation-presentation.page.scss']
})
export class AffirmationPresentationPage {

    private affirmations: Array<IAffirmation> = [];

    constructor(private route: ActivatedRoute, private router: Router){
        this.affirmations = this.route.snapshot.params as Array<IAffirmation>;
        console.log("Affirmations: ", this.affirmations);
    }

    recallAffirmationsPage(){
        this.router.navigate(['affirmations']);
    }
}