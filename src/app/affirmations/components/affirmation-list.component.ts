import { Component } from "@angular/core";
import { IAffirmation } from '../models/affirmations.model';


@Component({
    selector: 'affirmation-list',
    templateUrl: 'affirmation-list.component.html',
    styleUrls: ['affirmation-list.component.scss']
})
export class AffirmationList {

    private affirmations: Array<IAffirmation> = [];

    onRenderItems(event) {
        //console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
        let draggedItem = this.affirmations.splice(event.detail.from,1)[0];
        this.affirmations.splice(event.detail.to,0,draggedItem);
        event.detail.complete();
        //this.setNewOrder();
        //this.saveAchievementsToDb();
      };

      edit(){

      }

      delete(){
          
      }
}

