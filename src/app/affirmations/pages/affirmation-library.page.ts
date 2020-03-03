import { Component, OnInit } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { mockAffirmationsLibrary } from 'src/app/mocks/para-database';
import { AffirmationService } from '../services/affirmation.service';
import { Router } from '@angular/router';

@Component({
    selector: 'affirmations-library',
    templateUrl: 'affirmation-library.page.html',
    styleUrls: ['affirmation-library.page.scss']
})
export class AffirmationsLibraryPage {

    private affirmations: IAffirmation[];
    private affirmationsSelected: IAffirmation[];

    constructor(private affService: AffirmationService, private router: Router){
        this.affService.getAffirmations().subscribe(res => {
            this.affirmations = mockAffirmationsLibrary.filter(el => !res.find(m => m.name == el.name));
            this.affirmations.map(el => el['isChecked'] = false);
        });
    }

    save(){
        this.affirmations = this.affirmations.filter(el => el['isChecked'] == true);
        this.affirmations.map(el => delete el['isChecked']);
        this.affService.addAffirmationsSelectedFromLibrary(this.affirmations);
        this.router.navigate(['affirmations']);
    }

    cancel(){

    }
}