import { Component, Input } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';
import { AffirmationService } from '../services/affirmation.service';


@Component({
    selector: 'affirmation-list',
    templateUrl: 'affirmation-list.component.html',
    styleUrls: ['affirmation-list.component.scss']
})
export class AffirmationListComponent {

    @Input() affirmations: Array<IAffirmation> = [];

    constructor(private affirmationService: AffirmationService){
        
    }

    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
        let draggedItem = this.affirmations.splice(event.detail.from,1)[0];
        this.affirmations.splice(event.detail.to,0,draggedItem);
        event.detail.complete();
        //this.setNewOrder();
        //this.saveAchievementsToDb();
      };

      edit(aff: IAffirmation){
        console.log(aff);
      }

      delete(aff: IAffirmation){
          console.log(aff);
      }

      sort(dir: string) {
          
      }
}

