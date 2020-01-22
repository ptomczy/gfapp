import { Injectable } from "@angular/core";
import { ModalMode } from '../../models/component-model';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal.component';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    constructor(private modalCtr: ModalController){

    }
    
    showMe(mode: ModalMode){
        console.log("Wywołany serwis");
        this.presentModal(mode);
    }

    async presentModal(mMode: number) {
        const modal = await this.modalCtr.create({
          component: ModalComponent,
          componentProps: {
              par1: "To przychodzi z wywołania",
              modalMode: mMode
          }
        });
        modal.onDidDismiss().then(x => console.log("Przyszło: ", x.data));
        return await modal.present();
      }
}