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
    private captionReplacedByHome: string = '';

    constructor(private rtr: Router){
        this.affirmationsButtonVisible = true;
        this.achievementsButtonVisible = true;
        this.workplanButtonVisible = true;
    }

    navigateTo(direction: string) {
        switch(direction) {
            case '/workplan':
                {
                    console.log('CaptionReplacedByHome: ', this.captionReplacedByHome, ' , direction: ', direction, ' , isHomeCaptionDisplayed: ', this.isHomeCaptionDisplayed);

                    if(this.captionReplacedByHome != '') {
                        this.buttonWorkplanCaption = 'Workplan';
                        this.captionReplacedByHome = '';
                        this.isHomeCaptionDisplayed = true;
                        this.rtr.navigateByUrl('/home');
                    } else {
                        this.buttonWorkplanCaption = 'Home';
                        this.captionReplacedByHome = 'Workplan';
                        this.isHomeCaptionDisplayed = false;
                        this.rtr.navigateByUrl('/workplan');
                    }
                    break;
                }
        }
        
    }
}