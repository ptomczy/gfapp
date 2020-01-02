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

    private buttonWorkplanCaption: string;
    private buttonAffirmationsCaption: string;
    private buttonAchievementsCaption: string;
    private isHomeCaptionDisplayed: boolean;
    private captionReplacedByHome: string;

    constructor(private rtr: Router){
        this.affirmationsButtonVisible = true;
        this.achievementsButtonVisible = true;
        this.workplanButtonVisible = true;

        this.buttonAchievementsCaption = 'Achievements';
        this.buttonAffirmationsCaption = 'Affirmations';
        this.buttonWorkplanCaption = 'Workplan';
        this.isHomeCaptionDisplayed = false;
        this.captionReplacedByHome = '';
    }

    setHomeCaptionOnButton(dir: string){
        switch(dir){
            case '/workplan':
                {
                    this.captionReplacedByHome != '' ? this.buttonWorkplanCaption = 'Home' : this.buttonAchievementsCaption = 'Workplan';
                    this.captionReplacedByHome = dir;
                    break;
                }
            case '/affirmations':
                {
                    this.captionReplacedByHome != '' ? this.buttonAffirmationsCaption = 'Home' : this.buttonAffirmationsCaption = 'Affirmations';
                    this.captionReplacedByHome = dir;
                    break;
                }
            case '/achievements':
                {
                    this.captionReplacedByHome != '' ? this.buttonAchievementsCaption = 'Home' : this.buttonAchievementsCaption = 'Achievements';
                    this.captionReplacedByHome = dir;
                    break;
                }
        }
    }

    navigateTo(direction: string) {
        switch(direction) {
            case '/workplan':
                {
                    this.captionReplacedByHome == '/workplan' ? this.rtr.navigateByUrl('') : this.rtr.navigateByUrl('/workplan');
                    this.setHomeCaptionOnButton(direction);
                    break;
                }
        }
        
    }
}