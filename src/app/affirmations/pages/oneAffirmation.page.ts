import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { AffirmationService } from '../services/affirmation.service';
import { IAffirmation, IMode } from '../models/affirmations.model';

@Component({
    selector: 'one-affirmation',
    templateUrl: 'oneAffirmation.page.html',
    styleUrls: ['oneAffirmation.page.scss']
})
export class OneAffirmationPage {

    private affirmationName: string;
    private affirmations: Array<IAffirmation>;
    private mode: IMode = IMode.new;
    private affirmation: IAffirmation;

    constructor(private router: Router, private route: ActivatedRoute, private affService: AffirmationService){
    }
    verifyIfAffirmationNameExistsAlready(): Promise<Array<IAffirmation>>{
        this.affService.getAffirmations().subscribe(x => {
            this.affirmations = x;
        });
        return Promise.resolve(this.affirmations);
    }

    ionViewWillEnter(){
        this.affirmation = this.route.snapshot.params as IAffirmation;
        if(!this.affirmation.name) {
            this.mode = IMode.new;
        } else {
            this.mode = IMode.edit;
            this.affirmationName = this.affirmation.name;
        };
    }

    save(){
        if(this.mode == 0) {
            this.verifyIfAffirmationNameExistsAlready().then(() => {
                this.affService.addAffirmations([{order: this.affirmations.length + 1, name: this.affirmationName, toPresent: true}]);
                this.affirmationName = '';
            });
        } else {
            console.log("Wszedłem w edit, nazwa afirmacji to: ", this.affirmation.name);
        }
    }

    cancel(){
        this.router.navigate(['affirmations']);
    }

    addFromLibrary(){
        this.router.navigate(['affirmations/affirmations-library']);
    }
}