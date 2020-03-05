import { Injectable } from "@angular/core";
import { ToastController } from '@ionic/angular';
import { sanitizeIdentifier } from '@angular/compiler';

@Injectable()
export class ToastService {
    constructor(private toastController: ToastController){}

    async presentSimpleToast({ messageTxt, durationMs }: { messageTxt: string; durationMs: number; }){
        const toast = await this.toastController.create({
            message: messageTxt,
            duration: durationMs,
            position: 'middle'
        });
        toast.present();
    }

    async presentAdvancedToast({messageTxt, durationMs, buttons}: {messageTxt: string; durationMs: number; buttons: [{}]}){
        const toast = await this.toastController.create({
            message: messageTxt,
            duration: durationMs,
            position: 'middle',
            buttons: buttons
        });
        toast.present();
    }
}