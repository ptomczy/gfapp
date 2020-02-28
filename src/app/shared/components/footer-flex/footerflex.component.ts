import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'footerflex',
    templateUrl: 'footerflex.component.html',
    styleUrls: ['footerflex.component.scss']
})
export class FooterFlexComponent {
    @Input() affirmationsButtonVisible: boolean;
    @Input() achievementsButtonVisible: boolean;
    @Input() workplanButtonVisible: boolean;

    private buttonWorkplanCaption: string = 'Workplan';
    private buttonAffirmationsCaption: string = 'Affirmations';
    private buttonAchievementsCaption: string = 'Achievements';
    private isHomeCaptionDisplayed: boolean = false;

    constructor(private rtr: Router){
        this.affirmationsButtonVisible = true;
        this.achievementsButtonVisible = true;
        this.workplanButtonVisible = true;
    }

    navigateTo(direction: string) {
        switch(direction) {
            case '/workplan':
                {
                    if(this.buttonWorkplanCaption == 'Home') {
                        this.buttonWorkplanCaption = 'Workplan';
                        this.isHomeCaptionDisplayed = false;
                        this.rtr.navigateByUrl('/home');
                    } else {
                        this.buttonWorkplanCaption = 'Home';
                        this.turnOffOtherHomeCaptionsBut('Workplan');
                        this.isHomeCaptionDisplayed = true;
                        this.rtr.navigateByUrl('/workplan');
                    }
                    break;
                }

            case '/affirmations':
                {
                    if(this.buttonAffirmationsCaption == 'Home') {
                        this.buttonAffirmationsCaption = 'Affirmations';
                        this.isHomeCaptionDisplayed = false;
                        this.rtr.navigateByUrl('/home');
                    } else {
                        this.buttonAffirmationsCaption = 'Home';
                        this.turnOffOtherHomeCaptionsBut('Affirmations');
                        this.isHomeCaptionDisplayed = true;
                        this.rtr.navigateByUrl('/affirmations/affpresentation');
                    }
                    break;
                }

            case '/achievements':
                {
                    if(this.buttonAchievementsCaption == 'Home') {
                        this.buttonAchievementsCaption = 'Achievements';
                        this.isHomeCaptionDisplayed = false;
                        this.rtr.navigateByUrl('/home');
                    } else {
                        this.buttonAchievementsCaption = 'Home';
                        this.turnOffOtherHomeCaptionsBut('Achievements');
                        this.isHomeCaptionDisplayed = true;
                        this.rtr.navigateByUrl('/achievements');
                    }
                    break;
                }
        }
        
    }

    turnOffOtherHomeCaptionsBut(buttonName){
        switch(buttonName){
            case 'Workplan': {
                this.buttonAchievementsCaption = 'Achievements';
                this.buttonAffirmationsCaption = 'Affirmations';
                break;
            }
            case 'Affirmations': {
                this.buttonWorkplanCaption = 'Workplan';
                this.buttonAchievementsCaption = 'Achievements';
                break;
            }
            case 'Achievements': {
                this.buttonWorkplanCaption = 'Workplan';
                this.buttonAffirmationsCaption = 'Affirmations';
                break;
            }
        }

    }
}