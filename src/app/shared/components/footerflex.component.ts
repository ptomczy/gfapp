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

    constructor(private rtr: Router){
        this.affirmationsButtonVisible = true;
        this.achievementsButtonVisible = true;
        this.workplanButtonVisible = true;
    }

    navigateTo(direction: string) {
        this.rtr.navigateByUrl(direction);
    }
}