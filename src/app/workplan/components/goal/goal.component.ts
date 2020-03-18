import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IGoal } from '../../models/workplan.model';
import * as db from '../../../mocks/para-database';
@Component({
    selector: 'goal-component',
    templateUrl: 'goal.component.html',
    styleUrls: ['goal.component.scss']
})
export class GoalComponent {

  private goals0: Array<IGoal> = [];
  private goals1: Array<IGoal> = [];
  private goals2: Array<IGoal> = [];

  private chk: boolean = false;

  constructor(){
    this.goals0 = [...db.mockGoals.filter(el => el.level == 0)];
    this.goals1 = [...db.mockGoals.filter(el => el.level == 1)];
    this.goals2 = [...db.mockGoals.filter(el => el.level == 2)];
  }

    drop(event: CdkDragDrop<IGoal[]>, goalsFrom: Array<IGoal>, goalsTo: Array<IGoal>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(goalsTo, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(goalsFrom, goalsTo,
                            event.previousIndex,
                            event.currentIndex);
        }
      }

      checkChange(){
        console.log("Zaznaczenie: ", this.chk);
      }
}