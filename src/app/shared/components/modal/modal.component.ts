import { Component, Input } from "@angular/core";
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'modal-component',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss']
})
export class ModalComponent {

    @Input()par1: string;
    private par2: string = "To jest parametr wychodzący";
    private setOfParams: {p1: string, p2: string};

    constructor(private modalController: ModalController){
    }

    closeModal(){
        this.setOfParams = {
            p1: this.par1,
            p2: this.par2
        }
        this.modalController.dismiss(this.setOfParams);
    }

    segmentChanged(ev: any) {
        console.log("Selected segment: ", ev.detail.value);
    }
}