import { Component, Input } from "@angular/core";
import { IAffirmation, IMode } from '../models/affirmations.model';
import { AffirmationService } from '../services/affirmation.service';
import { Router } from '@angular/router';


@Component({
    selector: 'affirmation-list',
    templateUrl: 'affirmation-list.component.html',
    styleUrls: ['affirmation-list.component.scss']
})
export class AffirmationListComponent {

    @Input() affirmations: Array<IAffirmation> = [];

    constructor(private affirmationService: AffirmationService, private router: Router){ 
    }

    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
        let draggedItem = this.affirmations.splice(event.detail.from,1)[0];
        this.affirmations.splice(event.detail.to,0,draggedItem);
        event.detail.complete();
      };

      edit(aff: IAffirmation){
        this.router.navigate(['affirmations/one-affirmation', aff]);
      }

      delete(aff: IAffirmation){
          this.affirmationService.deleteAffirmationFromPresented(aff);
      }

      sort(dir: string) {
          
      }
}

