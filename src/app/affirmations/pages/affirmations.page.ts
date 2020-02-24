import { Component } from "@angular/core";

@Component({
    selector: 'affirmations-page',
    templateUrl: 'affirmations.page.html',
    styleUrls: ['affirmations.page.scss']
})
export class AffirmationsPage {

    private dataList: Array<any> = [];


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