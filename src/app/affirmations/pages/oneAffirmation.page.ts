import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { AffirmationService } from '../services/affirmation.service';
import { IAffirmation, IMode } from '../models/affirmations.model';
import { ToastService } from 'src/app/shared/services/toast.service';
import { FormControl, Validators, FormGroup, Form } from '@angular/forms';

@Component({
    selector: 'one-affirmation',
    templateUrl: 'oneAffirmation.page.html',
    styleUrls: ['oneAffirmation.page.scss']
})
export class OneAffirmationPage {

    private affirmationName: string;
    private oldAffirmationName: string;
    private affirmations: Array<IAffirmation>;
    private mode: IMode = IMode.new;
    private affirmation: IAffirmation;
    private affForm: FormGroup;

    constructor(private router: Router, private route: ActivatedRoute, private affService: AffirmationService, private toastService: ToastService){
        this.affForm = new FormGroup({
            affName: new FormControl('', Validators.required)
        })
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
            this.oldAffirmationName = this.affirmation.name;
        };
    }

    save(){
        if(this.mode == 0) {
            this.verifyIfAffirmationNameExistsAlready().then(() => {
                this.affService.addAffirmations([{order: this.affirmations.length + 1, name: this.affirmationName, toPresent: true}]);
                this.affirmationName = '';
            });
            this.router.navigate(['affirmations']);
            this.toastService.presentAdvancedToast({
                messageTxt: "Affirmation added",
                durationMs: 2000,
                buttons: [
                    {
                        side: 'end',
                        text: 'Add next',
                        handler: () => {
                            this.router.navigate(['affirmations/one-affirmation']);
                        }
                    }
                ]
            })
        } else {
            let message: string;
            if(this.oldAffirmationName == this.affirmationName){
                message = "Nothing changed";
            } else {
                message = "Affirmation changed";
            }
            this.affService.editAffirmation(this.affirmation, this.affirmationName);
            this.router.navigate(['affirmations']);
            this.toastService.presentSimpleToast({
                messageTxt: message,
                durationMs: 2000,
            })
        }
    }

    cancel(){
        this.router.navigate(['affirmations']);
    }

    addFromLibrary(){
        this.router.navigate(['affirmations/affirmations-library']);
    }

}