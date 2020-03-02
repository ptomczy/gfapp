import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'one-affirmation',
    templateUrl: 'oneAffirmation.page.html',
    styleUrls: ['oneAffirmation.page.scss']
})
export class OneAffirmationPage {

    private affirmationName: string = "Nazwa affirmation";

    constructor(private router: Router){

    }

    save(){

    }

    cancel(){

    }

    addFromLibrary(){
        this.router.navigate(['affirmations/affirmations-library']);
    }
}