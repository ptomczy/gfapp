import { Component, OnInit } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { mockAffirmationsLibrary } from 'src/app/mocks/para-database';
import { AffirmationService } from '../services/affirmation.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
    selector: 'affirmations-library',
    templateUrl: 'affirmation-library.page.html',
    styleUrls: ['affirmation-library.page.scss']
})
export class AffirmationsLibraryPage {

    private affirmations: IAffirmation[];
    private affirmationsSelected: IAffirmation[];

    constructor(private affService: AffirmationService, private router: Router, private toastService: ToastService){
        this.affService.getAffirmations().subscribe(res => {
            this.affirmations = mockAffirmationsLibrary.filter(el => !res.find(m => m.name == el.name));
            this.affirmations.map(el => el['isChecked'] = false);
        });
    }

    save(){
        this.affirmations = this.affirmations.filter(el => el['isChecked'] == true);

        let affirmationsCount = this.affirmations.length;
        let message: string;

        if(affirmationsCount > 0) {
            message = "Affirmation list updated";
        } else {
            message = "Nothing changed";
        }

        this.affirmations.map(el => delete el['isChecked']);
        this.affService.addAffirmations(this.affirmations);
        this.router.navigate(['affirmations']);

        this.toastService.presentSimpleToast({
            messageTxt: message,
            durationMs: 2000
        })
    }

    cancel(){
        this.router.navigate(['affirmations/one-affirmation']);
    }
}