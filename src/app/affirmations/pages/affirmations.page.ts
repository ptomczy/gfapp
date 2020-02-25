import { Component } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { AffirmationService } from '../services/affirmation.service';
import { Router } from '@angular/router';

@Component({
    selector: 'affirmations-page',
    templateUrl: 'affirmations.page.html',
    styleUrls: ['affirmations.page.scss']
})
export class AffirmationsPage {

    private dataList: Array<IAffirmation> = [];

    constructor(private affirmationService: AffirmationService, private router: Router){
      this.affirmationService.getAffirmations().subscribe(res => this.dataList = res);
    }

    startPresentation(){
      console.log("Presentation started");
      this.router.navigate(['affirmations/affpresentation', this.dataList]);
    }

    addNew(){

    }

    loadData(event) {
        setTimeout(() => {
          event.target.complete();

          if (this.dataList.length == 1000) {
            event.target.disabled = true;
          }
        }, 500);
      }
}