import {Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-sb-tutorial-popup',
    templateUrl: './sb-tutorial-popup.component.html',
    styleUrls: ['./sb-tutorial-popup.component.scss']
})
export class SbTutorialPopupComponent implements OnInit {
    appName = '';
    isPopoverPresent = false;
    videos = '<strong class="bold">Videos</strong>';
    interact = '<strong class="bold">Interactive Videos</strong>';
    worksheets = '<strong class="bold">Worksheets</strong>';
    constructor(
        private popoverCtrl: PopoverController,
        private navParams: NavParams
    ) {
    }

    ngOnInit() {
        this.appName = this.navParams.get('appLabel');

        setTimeout(() => {
            this.isPopoverPresent = true;
        }, 2000);
    }

    closePopover(continueClicked: boolean) {
        this.popoverCtrl.dismiss({continueClicked});
    }

}